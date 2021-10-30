module.exports = {
    name: 'interactionCreate', 
    async execute(interaction, client) {
        if(interaction.componentType != 'BUTTON') return
        if(interaction.user.bot) return
        if(!interaction.customId.startsWith('multiple-she')) return 
        const comps = interaction.message.components
        let row = comps[0]
        let components = row.components 
        let he = components[0]
        let she = components[1]
        let they = components[2]
        let apply = components[3]
        if(interaction.customId == 'multiple-she-green') {
            she.style = 'SECONDARY'
            she.customId = 'multiple-she-grey'
            row.components = [he, she, they, apply]
        } else {
            she.style = 'SUCCESS'
            she.customId = 'multiple-she-green'
            row.components = [he, she, they, apply]
        }

        const pe = {
            title: 'Pronouns',
            description: 'Pick the pronouns you want.\nThe button is green when the pronoun is assigned',
            color: 0xffff00
        }
        await interaction.update({embeds: [pe], components: [row]})
    }
}