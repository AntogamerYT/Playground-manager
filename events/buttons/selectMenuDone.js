module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if(interaction.componentType != 'SELECT_MENU') return
        if(interaction.user.bot) return
        if(interaction.customId != 'botsel') return
        let value = interaction.values
        value = value[0]
        console.log(value)
        const e = {
            title: 'All set',
            description: 'Alright! Everything is ready!\nProceed with creating the playground?',
            color: 0x00ff00,
            footer: {
                text: 'Powered by Playground Manager',
                icon_url: client.user.displayAvatarURL()
            }
        }
    const button1 = {
        type: 2,
        label: 'Confirm',
        style: 'SUCCESS',
        custom_id: 'confirmplay' + value
    }  
    const button2 = {
        type: 2,
        label: 'Abort',
        style: 'DANGER',
        custom_id: 'abortplay'
    }  
    const row = {
        type: 1,
        components: [button1, button2]
    }
    interaction.update({embeds: [e], components: [row], ephemeral: true})    
    }
}