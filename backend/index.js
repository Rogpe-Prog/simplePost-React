const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3001
const router = require('./routes/route')
const mongodb = 'mongodb://localhost/simplePost'

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

app.use(cors())
app.use(express.json())

app.use('/api', router)

mongoose.set('debug', true)

mongoose
    .connect(mongodb, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(()=> {
        app.listen(port, () => {
            console.log('Backend simple post running.....')
        })
    })