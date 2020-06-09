const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');
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

router.post('/login', (req, res) => {
    let { username, password } = req.body;

  
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);

          res.status(200).json({
            message: `Welcome ${user.username}!`,
            token
          });
        } else {
          res.status(401).json({ message: 'You shall not pass' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });




  function generateToken(user) {
    const payload = {
      subject: user.id, // sub in payload is what the token is about
      username: user.username,
      // ...otherData
    };
  
    const options = {
      expiresIn: '1d', // show other available options in the library's documentation
    };
  
    // extract the secret away so it can be required and used where needed
    return jwt.sign(payload, secrets.jwtSecret, options); // this method is synchronous
  }


module.exports = router;