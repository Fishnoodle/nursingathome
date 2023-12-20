const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://nursingathome:nurse293dev@cluster0.bqialms.mongodb.net/?retryWrites=true&w=majority')

app.post('/api/register', async (req, res) => {
  console.log(req.body)
  try {
    const user = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password
    })
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
    const token = jwt.sign(
      {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email
      },
      'dd5f3089-40c3-403d-af14-d0c228b05cb4',
      { expiresIn: '5m' }
    )
    return res.json({ status: 'ok', user: token })
  } else {
    return res.json({ status: 'error', user: false })
  }
})

app.listen(1337, () => {
  console.log('Server started on 1337')
})
