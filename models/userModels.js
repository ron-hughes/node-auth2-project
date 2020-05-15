const db = require('./../database/dbConfig');
const bcrypt = require('bcryptjs')


function findUsers(){
    return db('users');
}


async function addUser(user){
    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash
    const [id] = await db('users').insert(user);
    return findUserById(id)
}
function findUserByUserName(username){
    return db('users').where('username', username).first()

}
function findUserById(id){
    return db('users').where('id', id).first()
}

module.exports = {
    findUsers,
    addUser,
    findUserByUserName
}