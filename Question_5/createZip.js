const fs = require("fs");
const archiver = require("archiver");

const output = fs.createWriteStream("archive.zip");
const archive = archiver("zip", { zlib: { level: 9 } });

output.on("close", () => {
  console.log(`Zip created: ${archive.pointer()} bytes`);
});

archive.on("error", (err) => {
  throw err;
});

archive.pipe(output);

//Change this to your actual folder name
archive.directory("files_to_zip/", false);

archive.finalize();
