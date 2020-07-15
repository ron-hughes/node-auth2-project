const express = require('express');
const router = express.Router();

const users = require('../models/userModels');


router.get('/users', (req, res) => {
  users.getAll()
  .then(users =>{
      res.json(users)
  }) 
  .catch(err => res.send(err))
})

module.exports = router;