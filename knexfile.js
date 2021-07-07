// Update with your config settings.

module.exports = {

  development: {
      // our DBMS driver
      client: 'sqlite3',
      // necessary when using sqlite3
      useNullAsDefault: true,
      // the location of our db
      connection: {
        filename: './database/users.db3',

      },
      
    migrations: {
      directory: './database/migrations'
    },
  }

};