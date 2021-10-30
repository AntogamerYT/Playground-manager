module.exports = {
    name: 'interactionCreate', // madonna quanta roba stiamo scrivendo lol, sto coso diventerà più grande di snake come codice scritto lol ahahahaahaa
    async execute(interaction, client) {
        if(interaction.componentType != 'BUTTON') return
        if(interaction.user.bot) return
        if(!interaction.customId.startsWith('multiple-he')) return
        const comps = interaction.message.components
        let row = comps[0]
        let components = row.components 
        let he = components[0]
        let she = components[1]
        let they = components[2]
        let apply = components[3]
        if(interaction.customId == 'multiple-he-green') {
            he.style = 'SECONDARY'
            he.customId = 'multiple-he-grey'
            row.components = [he, she, they, apply]
        } else {
            he.style = 'SUCCESS'
            he.customId = 'multiple-he-green'
            row.components = [he, she, they, apply]
        }
        // se funziona datemi le medaglie di obama HAHAHAHAH (will leave this comment since it's funny)
        const pe = {
            title: 'Pronouns',
            description: 'Pick the pronouns you want.\nThe button is green when the pronoun is assigned',
            color: 0xffff00
        }
        await interaction.update({embeds: [pe], components: [row]})
    }
}