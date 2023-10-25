const fs = require('fs');
const fsPromises = fs.promises;

// const fileOperations = async () => {
//     try {
//         const data = await fsPromises.readFile("./files/text.txt", "utf8");
//         console.log(data);
//         await fsPromises.rename("./files/text.txt", "./files/data.txt");
//         await fsPromises.writeFile(
//             "./files/data.txt",
//             `Hello there Every One. I am the Manager\n`
//         );
//         await fsPromises.appendFile(
//             "./files/data.txt",
//             "Sumayyah Sayyed, Ali Hassan, Ayesha Umar, Ayesha Asif\n"
//         );
//         const newData = await fsPromises.readFile("./files/data.txt", "utf8");
//         console.log(newData);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

// fileOperations();

async function newFileDataOps() {
    await fsPromises.writeFile("./files/new_file.txt", "New File, new Data\n", "utf8");
    const fileData = await fsPromises.readFile("./files/new_file.txt", "utf8");

    await fsPromises.appendFile("./files/new_file.txt", fileData, "utf8");
    const getData = await fsPromises.readFile("./files/new_file.txt", "utf8");
    console.log(getData);
}
newFileDataOps();