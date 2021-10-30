module.exports = {
    name:'ready',
    once: true,
    async execute(client) {
        console.log('Ready!') 
        await client.user.setActivity("The Bot Playground Discord Server!", {type: "LISTENING" , status: "IDLE" })
    }
}