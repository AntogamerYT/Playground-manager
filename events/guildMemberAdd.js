module.exports = {
    name: 'guildMemberAdd',
    async execute(member, client) {
        const guild = client.guilds.cache.get('898885567058706432')
        const chan = guild.channels.cache.get('898885567096430649')
        const rules = guild.channels.cache.get('898885567096430648')
        const pg = guild.channels.cache.get('898885567520071687')

        const welcome = {
            title: 'Welcome!',
            description: 'Welcome to our server! You can test your bots in a private channel here, make sure to check ' + rules.toString() + ' and ' + pg.toString() + ' before starting!',
            color: 0x00ff00
        }
        await chan.send({content: '<@'+member.id+'>', embeds: [welcome] })
    }
}