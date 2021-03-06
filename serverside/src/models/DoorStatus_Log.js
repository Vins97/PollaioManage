const Sequelize = require("sequelize")
const db = require('../db/db')
var DoorStatus_Logs = db.sequelize.define("DoorLog",
    {
        user_authorized: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        movement: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }
);

module.exports = DoorStatus_Logs