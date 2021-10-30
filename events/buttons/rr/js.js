module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if(interaction.componentType != 'BUTTON') return
        if(interaction.user.bot) return
        if(interaction.customId != 'js') return
        
        if (interaction.member.roles.cache.has('899302244225265715')) {
            interaction.member.roles.remove('899302244225265715')
            interaction.reply({content: 'I removed the JavaScript role!', ephemeral: true})
        } else {
            interaction.member.roles.add('899302244225265715') 
            interaction.reply({content: 'I added the JavaScript role!', ephemeral: true})
        }
    }
}