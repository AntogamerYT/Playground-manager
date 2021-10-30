const Discord = require('discord.js');
require('dotenv').config();
const fs = require('fs');

const client = new Discord.Client({intents: 7927});
client.prefix = 'p.';

client.owners = [
    '434395983862956034',
    '514168581135794206',
    '658586788721590273',
    '805500495283617853'
   ];
   client.setMaxListeners(1000)
   client.cooldowns = new Discord.Collection()

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	try{
	if (event.once) {
		client.once(event.name, async (...args) => await event.execute(...args, client));
	} else {
		client.on(event.name, async (...args) => await event.execute(...args, client));
	}
} catch(err) {
	console.log(err)
}}

const buttonEvents = fs.readdirSync('./events/buttons/').filter(file => file.endsWith('.js'));
for (const file of buttonEvents) {
	const event = require(`./events/buttons/${file}`);
	try{
	if (event.once) {
		client.once(event.name, async (...args) => await event.execute(...args, client));
	} else {
		client.on(event.name, async (...args) => await event.execute(...args, client));
	}
} catch(err) {
	console.log(err)
}}

const rr = fs.readdirSync('./events/buttons/rr/').filter(file => file.endsWith('.js'));
for (const file of rr) {
	const event = require(`./events/buttons/rr/${file}`);
	try{
	if (event.once) {
		client.once(event.name, async (...args) => await event.execute(...args, client));
	} else {
		client.on(event.name, async (...args) => await event.execute(...args, client));
	}
} catch(err) {
	console.log(err)
}}

client.login(process.env.TOKEN);