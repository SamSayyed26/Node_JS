// File System Module
const fs = require('fs');

let message = "File is edited perfectly";

fs.readFile("./files/text.txt'", "utf8", (err, res) => {
    if (err) {
        console.log('Error: ', err);
    }
    fs.writeFile(
        "./files/text.txt'",
        message,
        { flag: 'r' }, // WriteFile() usually creates a new File if it does not exists. However the 'r' flag will throw an error if the file doesnot exists. and it will not create a new file.
        (newErr) => {
            if (newErr) {
                console.log(newErr)
            }

            console.log(`Async Result: \n`, res);
        })
})