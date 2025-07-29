const fs = require("fs");
const util = require("util");

// Promisify the fs.unlink function
const unlinkAsync = util.promisify(fs.unlink);

// File to be deleted
const filePath = "./sample.txt";

// Async function to delete the file
async function deleteFile() {
  try {
    await unlinkAsync(filePath);
    console.log(`File '${filePath}' deleted successfully.`);
  } catch (err) {
    console.error(`Error deleting file: ${err.message}`);
  }
}

deleteFile();
