exports.up = async function(knex) {
    await knex.schema.createTable('users', tbl=>{
        tbl.increments();// creates id and increments automatically
        tbl.string('username', 128).unique().notNullable();
        tbl.string('password', 128).notNullable();

    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists()
};
