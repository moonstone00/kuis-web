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

// router.put('/:id', async (req, res) => {
//     const { id } = req.params
//     const { question, firstOption, secondOption, thirdOption, fourthOption, correctAnswer } = req.body
    
//     try {
//         const questionId = await QuestionsModal.findByPk(id)
//         if(questionId) {
//             const questionUpdate = await QuestionsModal.update({
//                 question,
//                 firstOption,
//                 secondOption, 
//                 thirdOption,
//                 fourthOption, 
//                 correctAnswer
//             })

//             res.status(200).json({
//                 data: questionUpdate,
//                 metadata: "Question updated"
//             })
//         }
//     } catch{
//         res.status(400).json({
//             error: "Error updating question"
//         })
//     }
// })

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const question = await QuestionsModal.findByPk(id);

        if (!question) {
            return res.status(404).json({ message: "Question not found" });
        }

        await question.destroy();

        res.status(200).json({
            message: `Question with ID ${id} has been deleted`,
        });
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
});



module.exports = router