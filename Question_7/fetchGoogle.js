// Import node-fetch
// const fetch = require("node-fetch");

// Async function to fetch Google homepage
async function fetchGoogleHomePage() {
  try {
    const response = await fetch("https://www.google.com");
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.text(); // .text() because it's HTML
    console.log("Google homepage fetched successfully.\n");
    console.log(data.substring(0, 500)); // Print first 500 characters
  } catch (error) {
    console.error("Error fetching page:", error.message);
  }
}

fetchGoogleHomePage();
