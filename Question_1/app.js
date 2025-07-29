const express = require("express");
const app = express();
const PORT = 8000;

// Serve static files from "public" folder
app.use(express.static("public"));

// GET route /gethello
app.get("/gethello", (req, res) => {
    res.send("Hello NodeJS!!");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
