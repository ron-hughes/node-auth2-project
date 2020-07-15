const db = require('../database/dbConfig');

module.exports = {
  getAll,
  findBy,
  findById,
  add,
  remove
}

function getAll() {
  return db('users')
}


function findBy(filter) {
  return db('users').where(filter);
}//end findBy

function findById(id) {
  return db("users").where({ id })
}

async function add(user) {
  const [id] = await db('users')
    .insert(user, 'id');
  return findById(id);
}//end add

async function remove(id) {
  const delUser = await findById(id).select('username');
  return db('users')
    .select('username')
    .where({ id })
    .del(id)
    .then(res => { return delUser });
}//end delete