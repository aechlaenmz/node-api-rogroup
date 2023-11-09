const express = require('express');
const app = express();
const PORT = 3000;

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
