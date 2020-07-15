const express = require('express')
const server = express();
const PORT = 5000;
const userRoutes = require('./routes/userRoutes');
const dbConfig = require('./database/dbConfig');
const authRouter = require('./auth/auth-router');

//global middleware
server.use(express.json());


server.use('/', userRoutes)
server.use('/auth', authRouter)
server.get('/', (req, res) => res.json({
    message: 'Welcome'
}))


module.exports = server;