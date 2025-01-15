const express = require('express')
const router = express.Router()
const UsersModel = require('../models/users')

router.get('/', async (req, res) => {
    const users = await UsersModel.findAll()

    res.status(200).json({
        data: users,
        metadata: "Test user endpoint"
    })
})

module.exports = router