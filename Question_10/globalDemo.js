// 1. __dirname - directory name of current module
console.log("Current directory:", __dirname);

// 2. __filename - full path of the current file
console.log("Current file:", __filename);

// 3. setTimeout - call a function after delay
setTimeout(() => {
    console.log("This message is shown after 2 seconds");
}, 2000);

// 4. setInterval - call a function repeatedly
let count = 0;
const interval = setInterval(() => {
    console.log("Interval running...", ++count);
    if (count === 3) clearInterval(interval); // Stop after 3 times
}, 1000);

// 5. console - global logging object
console.log("This is a log using the global 'console' object");

// 6. process - information about the current Node.js process
console.log("Process platform:", process.platform);
console.log("Process version:", process.version);
