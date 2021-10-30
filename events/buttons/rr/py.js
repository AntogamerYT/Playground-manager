module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if(interaction.componentType != 'BUTTON') return
        if(interaction.user.bot) return
        if(interaction.customId != 'py') return
        
        if (interaction.member.roles.cache.has('899302275384762458')) {
            interaction.member.roles.remove('899302275384762458')
            interaction.reply({content: 'I removed the Python role!', ephemeral: true})
        } else {
            interaction.member.roles.add('899302275384762458')
            interaction.reply({content: 'I added the Python role!', ephemeral: true})
        }
    }
}