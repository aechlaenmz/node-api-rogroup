const express = require('express');
const noblox = require('noblox.js');
const app = express();
const PORT = 3000;

const cookie = process.env.COOKIE;
const groupid = process.env.GROUPID;

async function startApp() {
    await noblox.setCookie(cookie);
    let currentUser = await noblox.getCurrentUser(); // Get information about the current user
    console.log(`Logged in as ${currentUser.UserName} (${currentUser.UserID})`); // Log the current user's username and ID to the console
}

startApp();

app.listen(PORT, () => {
    console.log(`API Listening on PORT ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('This is my API');
});

app.get('/setrank', (req, res) => {
    res.send('This is my API in setRank');
});

module.exports = app;
