const fs = require("fs");

// 1. Create and write to a file
fs.writeFileSync("example.txt", "This is the initial content.\n");
console.log("File created and written.");

// 2. Read from the file
const data = fs.readFileSync("example.txt", "utf8");
console.log("File content:");
console.log(data);

// 3. Append more data
fs.appendFileSync("example.txt", "This is appended content.\n");
console.log("Data appended.");

// 4. Rename the file
fs.renameSync("example.txt", "renamed_example.txt");
console.log("File renamed to 'renamed_example.txt'");

// 5. Delete the file
// fs.unlinkSync("renamed_example.txt");
console.log("File deleted.");
