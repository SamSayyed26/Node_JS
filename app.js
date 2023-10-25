// Path Module
const path = require("path");

const userName = "Sam";
const userEmail = "sumayyahsayyed26@gmail.com";
const userPhone = "03212345678";

if (userName.length > 2) {
    console.log(userName)
};

console.log(__dirname); // returns the directory path, it does not include the base file name 
console.log(__filename);

console.log(path.extname(__filename));
console.log(path.basename(__dirname)); // returns the folder name on which the base file is present
console.log(path.dirname(__dirname)); // returns the directory that contains the folder that has the base file in it
console.log(path.parse(__filename)); // breaks all paths, gives back an object that contains the root directory, the base file on which you are working, and the ext of that file

setTimeout(() => {
    console.log("After 2 Seconds"); // ISSUE: When I export the data, this setTimeout() also runs. WHY?
}, 2000);

console.log(path.sep);
const filePath = path.join("/new/", "folder", "new.txt");
console.log(filePath);
const base = path.basename(filePath);
console.log(base);


// console.log(process.env.PATH);

const data = path.resolve('/foo/', 'baz', 'newfile.txt');
console.log(data);

module.exports = { userName, userEmail, userPhone } // use this to export the functionalities to other files to avoid duplication. It helps to divide code into different files for better understanding and readability.