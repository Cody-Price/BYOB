// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: 'postgres://localhost/vineyards'
    },
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true
  }



};
