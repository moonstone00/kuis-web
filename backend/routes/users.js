const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    res.status(200).json({
        data: "Data users",
        metadata: "Test user endpoint"
    })
})

module.exports = router