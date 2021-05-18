const express = require('express')
const app = express()
const mongoose = require('mongoose')
Task = require('./api/models/todoListModel')
bodyParser = require('body-parser')



mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/Tododb', { useNewUrlParser: true, useUnifiedTopology: true })

app.use(bodyParser.urlencoded({ extended: true }))



port = process.env.PORT || 3000
app.listen(port)
