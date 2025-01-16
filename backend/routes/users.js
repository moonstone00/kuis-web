const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const UsersModel = require('../models/users')
const passwordCheck = require('../utils/passwordCheck')

router.get('/', async (req, res) => {
    const users = await UsersModel.findAll()

    res.status(200).json({
        data: users,
        metadata: "Test user endpoint"
    })
})

router.post('/', async (req, res) => {
    const {nip, nama, password} = req.body

    const encryptedPassword = await bcrypt.hash(password, 10)

    try {
        const users = await UsersModel.create({
            nip, nama, password: encryptedPassword
        })

        res.status(200).json({
            data: users,
            metadata: "Users created"
        })
    } catch(err) {
        res.status(400).json({
            error: err.message
        })
    }
})

router.post('/login', async (req, res) => {
    const {nip, password} = req.body
    try {
        const check = await passwordCheck(nip, password)
        if(check.compare) {
            res.status(200).json({
                data: check.userData,
                metadata: "user login success"
            })
        }
    } catch(error) {
        res.status(400).json({
            error: "Data Invalid"
        })
    }


})
module.exports = router