const express = require("express");
const app = express();
const PORT = 8000;

// Serve all files in "public" folder statically
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`Static server running at http://localhost:${PORT}`);
});
