const express = require('express');
const server = express();

//ROUTES
const userRoutes = require('../users/userRoutes.js');
const authRoutes = require('../auth/auth_router.js');

server.use(express.json());
server.use('/api/users', userRoutes);
server.use('/api/auth', authRoutes);

server.get('/api', (req, res )=> {
    res.send('Hello from Express');
});

module.exports = server;