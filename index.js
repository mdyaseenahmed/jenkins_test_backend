const express = require('express')
const cors = require('cors')
const app = express()
const routes = require('./routes')
app.use(express.json())
app.use(cors())
app.use('/api', routes)
const PORT = process.env.PORT || 3001
const server = app.listen(PORT, () => {
    console.log("Server is Up & Running on "+PORT)
})

module.exports = server;