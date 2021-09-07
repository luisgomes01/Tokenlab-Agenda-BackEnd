
exports.up = function(knex) {
    return knex.schema.createTable("user", function(table){
        table.increments();
        table.string("name", 20);
        table.string("username", 15).unique();
        table.string("password", 30);
        table.timestamps();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user');
};
