const express = require('express');
const path = require('path');
const port = process.env.PORT || 8081;
const app = express();

const publicPath = path.join(__dirname, '..', 'public');
console.log(publicPath);
app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log('server is up!');
});