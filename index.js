const Discord = require('discord.js');
require('dotenv').config();
const fs = require('fs');

const client = new Discord.Client();
const prefix = 'p.';

client.owners = [
    '434395983862956034',
    '514168581135794206'
   ];

client.once('ready', () => {
    client.user.setPresence({ activity: { name: "The Bot Playground Discord Server!", type: "LISTENING" }, status: "dnd" })
});

// client.on('message', message => {
//if(message.mentions.members.first().id === ('846153579013472277')){
  //message.channel.send('message')
//}
//});

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

client.on('message', message =>{
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'help'){
      client.commands.get('help').execute(client, message, args);
  } else if(command === 'ping'){
    client.commands.get('ping').execute(client, message, args);
  }else if(command === 'uptime'){
    client.commands.get('uptime').execute(client, message, args);
  }else if(command === 'eval'){
    client.commands.get('eval').execute(client, message, args);
  }
});

client.login(process.env.TOKEN);