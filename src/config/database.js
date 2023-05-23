const dotenv = require('dotenv')
dotenv.config()

module.exports =
{
  "development": {
    "username": process.env.DB__USERNAME,
    "password": process.env.DB__PASSWORD,
    "database": process.env.DB__DATABASE,
    "host": process.env.DB__HOST,
    "dialect": process.env.DB__DIALECT
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
