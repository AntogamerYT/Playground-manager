module.exports ={
    name: 'rr',
    async execute(client, message, args) {
        if(!client.owners.includes(message.author.id)) return

        const guild = client.guilds.cache.get('898885567058706432')
        const chan = guild.channels.cache.get('898885567096430648')
        message.reply('Sending...')
        /*
        const js = {
            type: 2, 
            label: 'JavaScript',
            style: 'SUCCESS',
            emoji: '<:js:899055770593792000>',
            custom_id: 'js'
        }
        const python = {
            type: 2,
            label: 'Python',
            style: 'SUCCESS',
            emoji: '<:py:899056163780460554>',
            custom_id: 'py'
        }
        const dotnet = {
            type: 2,
            label: '.net',
            style: 'SUCCESS',
            emoji: '<:dotnet:899056699296612443>',
            custom_id: 'dotnet'
        }
        const java = {
            type: 2,
            label: 'Java',
            style: 'SUCCESS',
            emoji: '<:java:899244705362096128>',
            custom_id: 'java'
        }
        const other = {
            type: 2,
            label: 'Other',
            style: 'SUCCESS',
            emoji: '❓',
            custom_id: 'other'
        }
        const row = {
            type: 1,
            components: [js, python, dotnet, java, other]
        }
        const pl = {
            title: 'AutoRoles',
            description: 'Select your programming languages!',
            color: 0x00ff00
        }
        chan.send({embeds: [pl], components: [row]})
        */

        const hehim = {
            type: 2,
            label: 'He/Him',
            style: 'SUCCESS',
            emoji: '<:hehim:899249924032589845>',
            custom_id: 'hehim'
        }
        const sheher = {
            type: 2,
            label: 'She/Her',
            style: 'SUCCESS',
            emoji: '<:sheher:899250241402978314>',
            custom_id: 'sheher'
        }
        const theythem = {
            type: 2,
            label: 'They/Them',
            style: 'SUCCESS',
            emoji: '<:theythem:899250537365655583>',
            custom_id: 'theythem'
        }
        const multiple = {
            type: 2,
            label: 'Pick multiple',
            style: 'SECONDARY',
            custom_id: 'multiple'
        }
        const row1 = {
            type: 1,
            components: [hehim, sheher, theythem, multiple]
        }
        const pe = {
            title: 'Pronouns',
            description: 'Select your pronouns!',
            color: 0xffff00
        }
        chan.send({embeds: [pe], components: [row1]})
    }
}