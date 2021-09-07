
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'tokenlab_db',
      user:     'root',
      password: '',
      port: '3306'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/db/migrations'
    }
  },



};
