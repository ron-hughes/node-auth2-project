const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const restricted = require('./../middleware/restricted')
const { findUsers, addUser, findUserByUserName} = require('./../models/userModels')


router.post('/register', async (req, res, next)=> {
    const user = req.body;
    try {
        if(user){
            res.status(201).json({
                message: 'New user created',
                user: await addUser(user)
            })
        }
    } catch (error) {
        res.status(401).json({
            message:'error',
            error: error 
        })
    }
   
})

router.post('/login', async (req, res, next)=>{
    const {username, password} = req.body;
    try {

        if(username && password ){
            const user = await findUserByUserName(username)
            const passwordValid = bcrypt.compareSync(password, user.password)
            if(passwordValid){
                req.session.user = user
                res.status(200).json({
                    message: `Welcome ${user.username}!`,
                  })
            }else{
                res.status(400).json({
                    message: 'Incorrect Credentials'
                })
            }
        }else{
            res.status(400).json({
                message: 'Please provide username and password'
            })
        }
    } catch (error) {
        res.status(404).json({

            message: 'server Error',
            error: error
        })
    }
});

router.get('/users', restricted(), async (req, res, next)=>{
        res.status(200).json({
            data: await findUsers()
        })
});


module.exports = router;