module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if(interaction.componentType != 'BUTTON') return
        if(interaction.user.bot) return
        if(!interaction.customId.startsWith('confirmplay')) return
        const id = interaction.customId.replace('confirmplay', '')
        const guild = client.guilds.cache.get('898885567058706432')
        const parent = guild.channels.cache.get('898885567520071686')
        const channel = await guild.channels.create(interaction.user.username.toLowerCase() + '-playground', {parent: parent})
        await channel.permissionOverwrites.create(id, {VIEW_CHANNEL: true, SEND_MESSAGES: true, ADD_REACTIONS: true, 274877906944: true, USE_PUBLIC_THREADS: true, SPEAK: true, CONNECT: true}, {type: 1})
        await channel.permissionOverwrites.create(interaction.user.id, {VIEW_CHANNEL: true, SEND_MESSAGES: true, ADD_REACTIONS: true, 274877906944: true, USE_PUBLIC_THREADS: true, SPEAK: true, CONNECT: true}, {type: 1})
        const e = {
            title: 'Success',
            description: 'Successfully created ' + channel.toString(),
            color: 0x00ff00,
            footer: {
                text: 'Powered by Playground Manager',
                icon_url: client.user.displayAvatarURL()
            }
        }
        await interaction.update({embeds: [e], components: []})
    }
}