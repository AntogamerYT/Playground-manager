module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if(interaction.componentType != 'BUTTON') return
        if(interaction.user.bot) return
        if(interaction.customId != 'java') return
        
        if (interaction.member.roles.cache.has('899302308872060928')) {
            interaction.member.roles.remove('899302308872060928')
            interaction.reply({content: 'I removed the Java role!', ephemeral: true})
        } else {
            interaction.member.roles.add('899302308872060928')
            interaction.reply({content: 'I added the Java role!', ephemeral: true})
        }
    }
}