/*In this project we'll implement a full authentication
workflow (register/login/logout/restrict endpoint) 
using Node.js, Express, SQLite and JSON Web Tokens on the server.*/

const server = require('./api/server.js');

const port = process.env.PORT || 3000;

server.listen(port, () => console.log('API IS NOW ALIVE'));