const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'session',
    {
        idUser: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    }
)