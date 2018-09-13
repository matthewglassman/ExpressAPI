const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')

let store = {}
store.accounts = []

//Create express app, middleware for parsing bod and error logging
let app = express()

app.use(bodyParser.json())
app.user(logger('dev'))
app.use(errorhandler())

//GET route to /accounts which will send entire accounts array back to client

app.get('/accounts', (req, res) => {
  res.status(200).send(store.accounts)
})
