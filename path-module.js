const path = require("path");

console.log(path.sep);

//join file path
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

//base path
const base = path.basename(filePath);
console.log(base);

//returns absolute path (path.result)

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
