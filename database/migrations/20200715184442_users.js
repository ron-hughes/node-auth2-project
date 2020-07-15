exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
      tbl.increments();
  
      tbl.string('username')
        .index()
        .unique()
        .notNullable()
  
      tbl.string('password')
        .notNullable()
  
    });// end users
  };
  
  exports.down = function(knex) {
    
  };