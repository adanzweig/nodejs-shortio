// Load environment variables from .env file
require('dotenv').config();

// Import axios for making HTTP requests
const axios = require('axios');

/**
 * Asynchronously shortens a given link using the short.io API.
 * @param {string} link - The original URL to be shortened.
 * @param {string} domain - The domain to be used for the shortened link.
 * @returns {Promise<Object>} - The response object from the API, containing the shortened URL.
 */
async function shortenLink(link, domain) {
    try {
        // Make a POST request to short.io API with the original URL and domain
        const response = await axios.post(`https://api.short.io/links`, {
            originalURL: link,
            domain
        }, {
            headers: {
                // Use API key from environment variables for authorization
                'Authorization': process.env.API_KEY
            }
        });
        // Return the response data (shortened URL information)
        return response.data;
    } catch (error) {
        // Log any errors encountered during the API request
        console.error('error', error);
    }
}

// Self-invoking anonymous function to use async-await at the top level
(async () => {
    // Shorten a given URL and print the result
    const url = await shortenLink('https://youtube.com/@CodingWithAdo', 'links.twimbox.com');
    console.log(url);
})();
