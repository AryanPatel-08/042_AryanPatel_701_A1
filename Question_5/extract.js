const fs = require("fs");
const unzipper = require("unzipper");

fs.createReadStream("archive.zip")
  .pipe(unzipper.Extract({ path: "unzipped_output" }))
  .on("close", () => {
    console.log("Extraction complete to 'unzipped_output' folder!");
  });
