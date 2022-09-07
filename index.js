const express = require('express')
const cors = require('cors')
const app = express()
const routes = require('./routes')
app.use(express.json())
app.use(cors())
app.use('/api', routes)

const server = app.listen(8000, () => {
    // console.log("Server is Up & Running on 6000")
})

module.exports = server;