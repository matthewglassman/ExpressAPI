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

//POST route to accounts. Response contains ID of new account and 201 status
app.post('/accounts', (req, res) => {
  let newAccount = req.body
  let id = store.accounts.length
  store.accounts.push(newAccount)
  res.status(201).send({id: id})
})

//PUT route to pull ID to be updated using URL Paramaters
app.put('/accounts/:id', (req, res) => {
  store.accounts[req.params.id] = req.body
  res.status(200).send(store.accounts[req.params.id])
})

//DELETE route. This will use splice to remove an item indicated using params
app.delete('/accounts/:id', (req, res) => {
  store.accounts.splice[req.params.id, 1)
  res.status(204).send()
})

//Which port should the application be listening on
app.listen(3000)
