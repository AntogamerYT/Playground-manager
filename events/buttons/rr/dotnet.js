module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if(interaction.componentType != 'BUTTON') return
        if(interaction.user.bot) return
        if(interaction.customId != 'dotnet') return
        
        if (interaction.member.roles.cache.has('899302350525706240')) {
            interaction.member.roles.remove('899302350525706240')
            interaction.reply({content: 'I removed the .net role!', ephemeral: true})
        } else {
            interaction.member.roles.add('899302350525706240')
            interaction.reply({content: 'I added the .net role!', ephemeral: true})
        }
    }
}