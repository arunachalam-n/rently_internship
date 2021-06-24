const { Sequelize } = require('sequelize');
const db = require('../config/database')

const Man = db.define('man', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    project: {
        type: Sequelize.STRING,
    },
    manager: {
        type: Sequelize.STRING,
    },
    engineer: {
        type: Sequelize.STRING,
    },
})

module.exports = Man;