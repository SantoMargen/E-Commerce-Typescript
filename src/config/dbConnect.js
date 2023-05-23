import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config()

const dbName = process.env.DB__DATABASE
const dbHost = process.env.DB__HOST
const dbUsername = process.env.DB__USERNAME
const dbPassword = process.env.DB__PASSWORD
const dbDialect = process.env.DB__DIALECT

const sequelizeConnection = new Sequelize(dbName, dbUsername, dbPassword, {
    host: dbHost,
    dialect: dbDialect
})


export default sequelizeConnection