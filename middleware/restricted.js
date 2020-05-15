module.exports = () => async (req, res, next)=>{
    if(req.session && req.session.user){
        next()
    }else{
        res.status(403).json({
            message: "You are not authorized And should create an account to access user data from the db"
        })
    }
}