const knex = require("knex")({
  client: 'mysql',
    connection: {
      database: 'tokenlab_db',
      user:     'root',
      password: '',
      port: '3306'
    },
})

module.exports = knex