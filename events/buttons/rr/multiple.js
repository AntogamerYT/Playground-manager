module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if(interaction.componentType != 'BUTTON') return
        if(interaction.user.bot) return
        if(interaction.customId != 'multiple') return
        let hehim = {
            type: 2,
            label: 'He/Him',
            style: 'SUCCESS',
            emoji: '<:hehim:899249924032589845>',
            custom_id: 'multiple-he-green'
        }
        let sheher = {
            type: 2,
            label: 'She/Her',
            style: 'SUCCESS',
            emoji: '<:sheher:899250241402978314>',
            custom_id: 'multiple-she-green'
        }
        let theythem = {
            type: 2,
            label: 'They/Them',
            style: 'SUCCESS',
            emoji: '<:theythem:899250537365655583>',
            custom_id: 'multiple-they-green'
        }
        let apply = {
            type: 2,
            label: 'Apply',
            style: 'PRIMARY',
            custom_id: 'apply'
        }
        let row1 = {
            type: 1,
            components: [hehim, sheher, theythem, apply]
        }
        const pe = {
            title: 'Pronouns',
            description: 'Pick the pronouns you want.\nThe button is green when the pronoun is assigned',
            color: 0xffff00
        }
        if(!interaction.member.roles.cache.has('899302127426469928')) {
            hehim.style = 'SECONDARY',
            hehim.custom_id = 'multiple-he-grey'
            row1 = {
                type: 1,
                components: [hehim, sheher, theythem, apply]
            }
        }
        if(!interaction.member.roles.cache.has('899302171584135208')) {
            sheher.style = 'SECONDARY',
            sheher.custom_id = 'multiple-she-grey'
            row1 = {
                type: 1,
                components: [hehim, sheher, theythem, apply]
            }
        }
        if(!interaction.member.roles.cache.has('899302206061281282')) {
            theythem.style = 'SECONDARY',
            theythem.custom_id = 'multiple-they-grey'
            row1 = {
                type: 1,
                components: [hehim, sheher, theythem, apply]
            }
        }
        await interaction.reply({embeds: [pe], components: [row1], ephemeral: true})
    }
}