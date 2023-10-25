const fs = require('fs');

const readFileData = fs.readFileSync('./files/text.txt', "utf8");
console.log(`Reading Previous Data: \n`, readFileData);
const names = `Sumayyah Sayyed, Ali Hassan, Ayesha Umar, Ayesha Asif\n`;

fs.writeFileSync(
    './files/text.txt',
    names,
    { encoding: "utf8", flag: 'a+' } // a+ flag => Open file for reading and appending. The file is created if it does not exist. 
);
fs.appendFileSync("./files/text.txt", names);
console.log("------------------------------")
const readFileDataAgain = fs.readFileSync('./files/text.txt', "utf8");

console.log(`Reading Newly Added Data: \n`, readFileDataAgain);

const fileNames = fs.readdirSync(__dirname);
console.log("files names are: ");
fileNames.forEach(file => {
    console.log('---', file);
});

// fs.truncateSync("./files/text.txt'");