const bcrypt = require("bcryptjs")
const router= require("express").Router();
const Users = require("../models/usersModel.js");
const jwt = require('jsonwebtoken'); // installed this library
const { jwtSec } = require('../config/security');
const {generateToken} = require('../utils/utils');



//register a new user
router.post('/register', (req, res) => {


})
  

module.exports = router;