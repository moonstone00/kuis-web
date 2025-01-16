const express = require('express')
const cors = require('cors')
const sequelize = require('./db.config')
const userEdpoint = require('./routes/users')

const app = express()
app.use(cors())
app.use(express.json())

const port = 3200

sequelize.sync()
    .then(() => console.log('Database Ready!!!'))
    .catch(err => console.error('Database sync failed', err))

app.use('/users', userEdpoint)

app.listen(port, () => console.log(`running server on port ${port}`))