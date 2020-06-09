const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

const Users = require('../users/users_model.js');


router.get('/', (req, res) => {
    res.status(200).send('Hello from the auth endpoint');
});

router.post('/register', (req, res) => {
    const newUser = req.body;
    const hash = bcrypt.hashSync(newUser.password, 10);
    newUser.password = hash;
    
    Users.add(newUser)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json(error);
        });

});


module.exports = router;