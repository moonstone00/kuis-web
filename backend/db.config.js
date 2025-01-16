const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('kuis', 'root', '', {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3308
})

module.exports = sequelize