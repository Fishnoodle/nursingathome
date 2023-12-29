const express = require('express')

const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')

app.use(cors())
app.use(express.json())

app.post('/'), async(req,res) => {
  console.log(req.body)
  try {
    const db = await mongoose.connect('mongodb+srv://nursingathome:nurse293dev@cluster0.bqialms.mongodb.net/?retryWrites=true&w=majority')
    console.log('CONNECTED TO DATABASE')
    res.json({ status: 'ok' })
  } catch (err) {
    console.log(err)
    res.json({ status: 'error', error: 'Cannot connect to db' })
  }
}


app.post('/api/register', async (req, res) => {
  console.log(req.body)

  try {
    const db = await mongoose.connect('mongodb+srv://nursingathome:nurse293dev@cluster0.bqialms.mongodb.net/?retryWrites=true&w=majority')
    console.log('CONNECTED TO DATABASE')
  } catch (err) {
    console.log(err)
  }

  try {
    const user = await User.create({
      role: req.body.role,
      password: req.body.password,
      fullName: req.body.fullName,
      username: req.body.username,
      email: req.body.email
    })
    console.log('REGISTERING USER')
    res.json({ status: 'ok' })
  } catch (err) {
    console.log(err)
    res.json({ status: 'error', error: 'Duplicate email' })
  }
})

app.post('/api/login', async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password
  })

  if (user) {
    console.log('LOGGING USER')

    return res.json({ status: 'ok', user })
  } else {
    console.log('CANNOT FIND USER')

    return res.json({ status: 'error', user: false })
  }
})

app.listen(1337, () => {
  console.log('Server started on 1337')
})
