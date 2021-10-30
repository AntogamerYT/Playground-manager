module.exports = {
    name: 'rateLimit',
    async execute(rt, client) {
        if(rt.global) {
            console.log(`The client is being globally rate limited!\n \nRetry after: ${rt.timeout}\nPath: ${rt.path}\nMethod: ${rt.method}\nRoute: ${rt.route}`)
        }
    }
}