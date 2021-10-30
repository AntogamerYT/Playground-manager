module.exports = {
    name: 'send',
    async execute(client, message, args) {
       if(!client.owners.includes(message.author.id)) return
       const guild = client.guilds.cache.get('898885567058706432') 
       const channel = guild.channels.cache.get('898885567520071687')
       // (row: 1, buttons: 2, select menu: 3)
       const button = {
        type: 2,
        label: 'Open Playground',
        style: 'SUCCESS',
        custom_id: 'playground'
       }
       const row = {
           type: 1,
           components: [button]
       }
       const e = {
           title: 'Open a playground',
           description: 'What is a playground?\nA playground is a dedicated channel where you can test your Discord bot\nThe Bot should NOT have these permissions:\n:one: Administrator\n:two: Manage channels\n:three: Manage server\n:four: Manage roles\n:five: Manage emojis\n:six: Manage webhooks\n:seven: Threads Permissions\n:eight: Mod permissions\n*If you also want a Voice Channel ping <@658586788721590273> or <@805500495283617853>*\n*Note that if you create a link with these permissions, they will automatically get disabled from us*\nClick the button to open a private room to test your bot!',
           color: 0x00ff00,
            footer: {
                text: 'Powered by Playground Manager',
                icon_url: client.user.displayAvatarURL()
            }
       }
       message.channel.send('Sending message in ' + channel.toString())
       channel.send({embeds: [e], components: [row]})
    }
}