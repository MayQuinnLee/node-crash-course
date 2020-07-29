const path = require("path"); //core module

//Base file name
console.log(path.basename(__filename));

//Directory name
console.log(path.dirname(__filename));
console.log(__dirname);

//File extension
console.log(path.extname(__filename));

//Create path object
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);

//Concatenate path
//../test/hello.html
console.log(path.join(__dirname, "test", "hello.html"));
