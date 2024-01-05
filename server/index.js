const express = require('express')

const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const fs = require('fs');
const https = require('https')

app.use(cors())
app.use(express.json())


mongoose.connect('mongodb+srv://nursingathome:nurse293dev@cluster0.bqialms.mongodb.net/?retryWrites=true&w=majority')

// Registers new user based on registration form
app.post('/api/register', async (req, res) => {
  console.log(req.body)
  
  try {

    const newPassword = await bcrypt.hash(req.body.password, 10)

    const user = await User.create({
      role: req.body.role,
      password: newPassword,
      fullName: req.body.fullName,
      username: req.body.username,
      email: req.body.email
    })
    console.log(user)
    res.json({ status: 'ok' })
  } catch (err) {
    res.json({ status: 'error', error: 'Duplicate email' })
  }
})

// Logins user, hashed password, and create jwt token
app.post('/api/login', async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  })

  if (!user) {
    return { status: 'error', error: 'Invalid login'}
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  )

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      'secret123'
    )

    return res.json({ status: 'ok', user: token })
  } else {
    return res.json({ status: 'error', user: false})
  }
})

// Retrieves user account
app.get('/api/userid', async(req,res) => {
  const token = req.headers['x-access-token']

  try {
    const decoded = jwt.verify(token, 'secret123')
    const email = decoded.email
    const user = awaitUser.findOne({ email: email })
    res.json({ status: 'ok', user: user })
  } catch (error) {
    res.json({ status: 'error', error: 'invalid user'})
  }
})

// Retrieves user token
app.get('/api/quote', async (req, res) => {
  const token = req.headers['x-access-token']

  try {
    const decoded = jwt.verify(token, 'secret123')
    const email = decoded.email
    const user = await User.findOne({ email: email })
  } catch (error) {
    console.log(error) 
    res.json({ status: 'error', error: 'invalid token' })
  }
})

/*
app.post('/api/quote', async (req, res) => {
  const token = req.headers['x-access-token']

  try {
    const decoded = jwt.verify(token, 'secret123')
    const email = decoded.email
    await User.updateOne(
      { email: email },
      { $set: { quote: req.body.quote } }
    )

    return res.json({ status: 'ok '})
  } catch (error) {
    console.log(error)
    res.json({ status: 'error', error: 'invalid token' })
  }
})
*/

// serve the API with signed certificate on 443 (SSL/HTTPS) port
const httpsServer = https.createServer({
  key: fs.readFileSync('/etc/letsencrypt/live/nursingathome.ca/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/nursingathome.ca/fullchain.pem'),
}, app)

httpsServer.listen(443, () => {
  console.log('HTTPS Server running on port 1337')
});