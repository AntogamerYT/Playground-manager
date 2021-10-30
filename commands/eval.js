const { inspect } = require("util");

function clean(text) {
  if (typeof (text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203)).replace("```JS", "").replace("```", "");
  else
    return text;
}

module.exports = {
  name: "eval",
  allowDMs: true,
  aliases: ["ev"],
  cooldown: 0,
  async execute(client, message, args) {
  if (!client.owners.includes(message.author.id)) return

    let toEval = clean(args.join(" "));
    try {
      if (toEval) {
        let evaluated = inspect(eval(toEval, { depth: 0 }));
        if(evaluated.length > 4096) return message.channel.send("Result would exceed 4096 characters limit.")
        const e = {
          color: 3066993,
          title: "Evaluation Executed!",
          description: `\`\`\`${evaluated}\`\`\``,
          timestamp: new Date()
        }
        message.channel.send({embeds: [e]});
      }
    } catch (error) {
        const embed = {
          color: 15158332,
          title: "Evaluation Cancelled",
          description: `\`\`\`${error}\`\`\``,
          timestamp: new Date()
        }
        message.channel.send({embeds: [embed]})
    }
  },
};

