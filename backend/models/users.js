const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db.config')

class User extends Model { }

User.init({
    nip: {
        type: DataTypes.STRING,
    },
    nama: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    }
}, {
    sequelize,
    modelName: 'Users',
})

module.exports = User