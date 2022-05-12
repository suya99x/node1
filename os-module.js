const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//method returns the sytem uptime in sec
console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOs ={
    name:os.type(),
    release:os.release(),
    totalMen:os.totalmem(),
    freeMen:os.freemem(),
}
console.log(currentOs)