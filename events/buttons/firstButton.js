const Discord = require('discord.js');

module.exports = {
    name: 'interactionCreate',
    coso: {
        name: 'play',
        cooldown: 3600000
    },
    async execute(interaction, client) {
        if(interaction.componentType != 'BUTTON') return
        if(interaction.user.bot) return
        if(interaction.customId != 'playground') return
        let { cooldowns } = client;
    
            if (!cooldowns.has(this.coso.name)) {
                cooldowns.set(this.coso.name, new Discord.Collection());
            }
        
            const now = Date.now();
            const timestamps = cooldowns.get(this.coso.name);
            let cooldownAmount = this.coso.cooldown;
            if (!cooldownAmount) {
                cooldownAmount = 3600000;
            }
            if (timestamps.has(interaction.user.id)) {
                const expirationTime = timestamps.get(interaction.user.id) + cooldownAmount;
        
                if (now < expirationTime) {
                    const timeLeft = (expirationTime - now);
                    if(!interaction.member.permissions.has('ADMINISTRATOR')) {
                    return interaction.reply({
                        content: `You can create a playground once an hour!`,
                        ephemeral: true
                    })
                }
            }
        }
            timestamps.set(interaction.user.id, now);
            setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount);
        const e = {
            title: 'Select your bot',
            description: 'Select the bot you want with you in the playground. \nIt must be an Unofficial Bot.\nYou can change this option in any moment you like.',
            color: 0x00ff00,
            footer: {
                text: 'Powered by Playground Manager',
                icon_url: client.user.displayAvatarURL()
            }
        }
        
        let select = {
            type: 3,
            custom_id: 'botsel',
            placeholder: 'Which bot would you like to have in the playground?',
            options: []
        }
        const guild = client.guilds.cache.get('898885567058706432')
        const role = guild.roles.cache.get('898885567058706436')
        let members = await guild.members.fetch({force: true})
        members = members.map(g =>g)
        for(let member of members) {
            if(member.user.bot && member.roles.cache.has(role.id)) {
                select.options.push({
                    label: member.user.tag,
                    value: member.user.id
                })
            }
        }
        const row = {
            type: 1,
            components: [select]
        }
        interaction.reply({embeds: [e], components: [row], ephemeral: true})
    }
}