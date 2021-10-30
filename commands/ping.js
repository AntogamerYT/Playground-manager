const Discord = require("discord.js");

module.exports = {
	name: 'ping',
	description: '',
	aliases: [],
	usage: '[command name]',
	cooldown: 2,
	execute(client, message, args) {
const bping = new Discord.MessageEmbed()
.setAuthor('The ping is ms \nWebsocket ping: ms')
.setColor('00ff00')
  message.channel.send({embeds: [bping]}).then(m =>{

      var ping = m.createdTimestamp - message.createdTimestamp;

      const embed = new Discord.MessageEmbed()
      .setAuthor(`The ping is ${ping}ms \nWebsocket ping: ${client.ws.ping}ms`)
      .setColor('00ff00')
      
      m.edit({embeds: [embed]})
  });
}
};