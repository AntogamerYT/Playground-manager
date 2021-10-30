module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if(interaction.componentType != 'BUTTON') return
        if(interaction.user.bot) return
        if(interaction.customId != 'other') return
        
        if (interaction.member.roles.cache.has('899302385044815884')) {
            interaction.member.roles.remove('899302385044815884')
            interaction.reply({content: 'I removed the Other role!', ephemeral: true})
        } else {
            interaction.member.roles.add('899302385044815884')
            interaction.reply({content: 'I added the Other role!', ephemeral: true})
        }
    }
}