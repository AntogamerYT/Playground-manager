module.exports = {
    name: 'interactionCreate', 
    async execute(interaction, client) {
        if(interaction.componentType != 'BUTTON') return
        if(interaction.user.bot) return
        if(interaction.customId != 'apply') return 
        const comps = interaction.message.components
        let row = comps[0]
        let components = row.components 
        let he = components[0]
        let she = components[1]
        let they = components[2]
        if(he.style == 'SUCCESS' && !interaction.member.roles.cache.has('899302127426469928')) await interaction.member.roles.add('899302127426469928')
        if(he.style == 'SECONDARY' && interaction.member.roles.cache.has('899302127426469928')) await interaction.member.roles.remove('899302127426469928')
        
        if(she.style == 'SUCCESS' && !interaction.member.roles.cache.has('899302171584135208')) await interaction.member.roles.add('899302171584135208')
        if(she.style == 'SECONDARY' && interaction.member.roles.cache.has('899302171584135208')) await interaction.member.roles.remove('899302171584135208')
        
        if(they.style == 'SUCCESS' && !interaction.member.roles.cache.has('899302206061281282')) await interaction.member.roles.add('899302206061281282')
        if(they.style == 'SECONDARY' && interaction.member.roles.cache.has('899302206061281282')) await interaction.member.roles.remove('899302206061281282')

        await interaction.update({content: 'Successfully updated your pronouns', embeds: [], components: [], ephemeral: true})
        }
}