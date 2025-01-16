const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db.config')

class Question extends Model { }

Question.init({
    question: {
        type: DataTypes.STRING
    },
    firstOption: {
        type: DataTypes.STRING
    },
    secondOption: {
        type: DataTypes.STRING
    },
    thirdOption: {
        type: DataTypes.STRING
    },
    fourthOption: {
        type: DataTypes.STRING
    },
    correctAnswer: {
        type: DataTypes.CHAR
    }
}, {
    sequelize,
    modelName: 'Question'
})

module.exports = Question
