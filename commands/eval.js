const { inspect } = require("util");

module.exports = {
  name: "eval",
  description: "eval",
  args: true,
  guildOnly: true,
  aliases: ["e"],
  cooldown: 0,
  execute(client, message, args) {
    if (!client.owners.includes(message.author.id)) return message.channel.send(":x: You can\'t execute the code you dumb.")

    let toEval = clean(args.join(" "));
    try {
      if (toEval) {
        let evaluated = inspect(eval(toEval, { depth: 0 }));
        message.channel.send({
          embed: {
            color: 3066993,
            title: "Evaluation Executed!",
            description: `\`\`\`${evaluated}\`\`\``,
            timestamp: new Date(),
          }
        });
      }
    } catch (error) {
      message.channel.send({
        embed: {
          color: 15158332,
          title: "Evaluation Cancelled",
          description: `\`\`\`${error}\`\`\``,
          timestamp: new Date()
        }
      });
    }
  },
};

function clean(text) {
  if (typeof (text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203)).replace("```JS", "").replace("```", "");
  else
    return text;
}