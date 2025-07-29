const fs = require("fs");
const archiver = require("archiver");

const output = fs.createWriteStream("archive.zip"); // Output file
const archive = archiver("zip", {
    zlib: { level: 9 } // Best compression
});

// Log when done
output.on("close", () => {
    console.log(`Zip created: ${archive.pointer()} total bytes`);
});

// Log errors
archive.on("error", (err) => {
    throw err;
});

archive.pipe(output);

// Append folder
archive.directory("data_to_zip/", false);

// Finalize and create zip
archive.finalize();



// this is for zip
// npm install archiver