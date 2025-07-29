function getResponse(input) {
    const responses = {
        "what is nodejs": "Node.js is a JavaScript runtime built on Chrome's V8 engine.",
        "what is npm": "NPM is a package manager for Node.js modules.",
        "how to create server": "Use http or express module to create a server.",
        "exit": "Bye!"
    };

    return responses[input.toLowerCase().trim()] || "I don't understand that.";
}

module.exports = { getResponse };
