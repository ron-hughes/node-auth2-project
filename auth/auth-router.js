const bcrypt = require("bcryptjs")
const router= require("express").Router();
const Users = require("../models/usersModel.js");
const jwt = require('jsonwebtoken'); // installed this library

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);

    user.password = hash;

    Users.addUser(user)
    .then(saved => {
        res.status(201).json({saved});
        req.session.id = saved[0].id

    })
    .catch(err => {
        res.status(500).json({ message: 'There is a problem with the DB', error: err});
    })
})

module.exports = router;