const express = require('express');
const server = express();

server.get('/', (req, res )=> {
    res.send('Hello from Express');
});

server.listen(3000, () => {
    console.log('API IS ALIVE NOW');
});