module.exports = {
	name: 'bp',
    async execute(client, message) {
        if(message.channel.id === '898885567520071680') {
            try{
            await message.react('✅')
            await message.react('❌')
            } catch(err) {
                console.log(err)
            }
        }
        if(message.channel.id === '898939960747524147') {
            try{
                await message.react('🐛')
                await message.react('❌')
            } catch(err) {
                console.log(err)
            }
        }
    }
}