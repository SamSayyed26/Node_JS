// OS Module
const os = require("os");

const {userName, userEmail, userPhone} = require("./app"); // require the module to use the exported data from the app.js file.

console.log(`Hello, ${userName}. Your account has been created. \nEmail: ${userEmail} \nPhone Number = ${userPhone}`);

console.log(os.userInfo());
console.log(`The System Uptime are ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
};

console.log(currentOS);