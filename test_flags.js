const fs = require('fs');

const readFileData = fs.readFileSync('./files/text.txt', "utf8");
console.log(`Reading Previous Data: \n`, readFileData);
const names = `Sumayyah Sayyed, Ali Hassan, Ayesha Umar, Ayesha Asif\n`;

fs.writeFileSync(
    './files/text.txt',
    names,
    { encoding: "utf8", flag: 'a+' } // a+ flag => Open file for reading and appending. The file is created if it does not exist.
);
console.log("------------------------------")
const readFileDataAgain = fs.readFileSync('./files/text.txt', "utf8");

console.log(`Reading Newly Added Data: \n`, readFileDataAgain);