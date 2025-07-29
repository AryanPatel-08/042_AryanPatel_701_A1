const readline = require("readline");
const bot = require("./chatbot");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "You: "
});

console.log("Ask me about Node.js (type 'exit' to quit)");
rl.prompt();

rl.on("line", (input) => {
    const response = bot.getResponse(input);
    console.log("Bot:", response);
    if (input.toLowerCase() === "exit") rl.close();
    else rl.prompt();
});
