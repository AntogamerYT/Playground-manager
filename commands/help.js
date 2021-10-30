const Discord = require("discord.js");

module.exports = {
	name: 'help',
	description: 'Help command',
	aliases: ["commands"],
	usage: '[command name]',
	cooldown: 2,
	execute(client, message, args) {
      const help = new Discord.MessageEmbed()
        .setColor("#9B9B9B")
        .setTitle("Hi! I\'m the manager, here are all my commands!")
        .setDescription(" **p.help** - Shows this command")
        .addField("General commands", "**p.ping** - Shows the bot latency \n**p.uptime** - Shows the uptime of the bot")
        .setFooter("Requested by: " + message.author.tag)
      message.channel.send({embeds: [help]});
	},
};