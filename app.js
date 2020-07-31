const express = require('express'),
    app = express();

const port = 3000;
const host = '127.0.0.1';

app.get('/', (req, res) => {
    res.status(200).type('text/plain');
    res.send('Home page');
});

app.listen(port, host, function() {
    console.log(`Server has been started on ${port} port: ${host}:${port}`);
});