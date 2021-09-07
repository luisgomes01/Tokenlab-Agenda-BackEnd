
exports.up = function(knex) {
    return knex.schema.createTable("event", function(table){
      table.increments();
      table.string("date");
      table.string("start");
      table.string("end");
      table.text("description", 500);
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('user.id');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('event');
};
