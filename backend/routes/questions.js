const express = require('express')
const router = express.Router()
const QuestionsModal = require('../models/questions')

router.get('/', async (req, res) => {
    const questions = await QuestionsModal.findAll()

    res.status(200).json({
        data: questions,
        metadata: "Question endpoint"
    })
})

router.post('/', async (req, res) => {
    const {question, firstOption, secondOption, thirdOption, fourthOption, correctAnswer} = req.body

    try {  
        const questions = await QuestionsModal.create({
            question,
            firstOption,
            secondOption,
            thirdOption,
            fourthOption,
            correctAnswer,
        })

        res.status(200).json({
            questions: questions,
            metadata: "Questions created"
        })
    } catch(err) {
        res.status(400).json({
            error: err.message
        })
    }
})

module.exports = router