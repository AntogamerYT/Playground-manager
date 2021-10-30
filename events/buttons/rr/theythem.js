module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if(interaction.componentType != 'BUTTON') return
        if(interaction.user.bot) return
        if(interaction.customId != 'theythem') return
        if(interaction.member.roles.cache.has('899302127426469928')) await interaction.member.roles.remove('899302127426469928')
        if(interaction.member.roles.cache.has('899302171584135208')) await interaction.member.roles.remove('899302171584135208') 
        if(!interaction.member.roles.cache.has('899302206061281282')) await interaction.member.roles.add('899302206061281282')
        return interaction.reply({content: 'You pronouns have been set to **They/Them**.', ephemeral: true})

    }
}