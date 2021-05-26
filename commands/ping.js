const Discord = require("discord.js");

module.exports = {
	name: 'ping',
	description: 'L\'aiuto del bot!',
	aliases: ['comandi', "commands"],
	usage: '[command name]',
	cooldown: 2,
	execute(client, message, args) {
    prefix = client.prefix
    const data = [];
    const { commands } = client;

  // It sends the user "Pinging"
  message.channel.send("Pinging...").then(m =>{
    // The math thingy to calculate the user's ping
      var ping = m.createdTimestamp - message.createdTimestamp;

    // Basic embed
      var embed = new Discord.MessageEmbed()
      .setAuthor(`Your ping is ${ping}`)
      .setColor("Your Color")
      
      // Then It Edits the message with the ping variable embed that you created
      m.edit(embed)
  });
}
};