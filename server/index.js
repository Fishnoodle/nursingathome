const express = require('express')

const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const fs = require('fs');
const https = require('https')

const User = require('./models/user.model')
const patientProfile = require('./models/patientProfile.model')
const patientRecords = require('./models/patientRecords.model')

app.use(cors())
app.use(express.json())


mongoose.connect('mongodb+srv://nursingathome:nurse293dev@cluster0.bqialms.mongodb.net/?retryWrites=true&w=majority')

// Registers new user based on registration form + hashed password
app.post('/api/register', async (req, res) => {
  
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

// Login user, hashed password, and create jwt token
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

// Inputs patient profile information + hashing sensetive information
app.post('/api/patientprofile', async (req, res) => {
  
  try {
    //bcrypt sensetive information
    const newDob = await bcrypt.hash(req.body.dob, 10) | ''
    const newCareCard = await bcrypt.hash(req.body.careCard, 10) | ''
  
    const newLocation_Address = await bcrypt.hash(req.body.location.address, 10) | ''
    const newLocation_City = await bcrypt.hash(req.body.location.city, 10) | ''
    const newLocation_Province = await bcrypt.hash(req.body.location.province, 10) | ''
    const newLocation_Postal = await bcrypt.hash(req.body.location.postal, 10) | ''
  
    const newContact_Phone = await bcrypt.hash(req.body.contact.phone, 10) | ''
    const newContact_Cell = await bcrypt.hash(req.body.contact.phone, 10) | ''
    const newContact_Email = await bcrypt.hash(req.body.contact.email, 10) | ''
    
    // store info
    const profile = await patientProfile({
      email: req.body.email,
      fullName: req.body.fullName,
      dob: newDob,
      age: req.body.age,
      gender: req.body.gender,
      height: req.body.height,
      weight: req.body.weight,
      careCard: newCareCard,
      familyDoctor: req.body.familyDoctor,
      location: {
        address: newLocation_Address,
        city: newLocation_City,
        province: newLocation_Province,
        postal: newLocation_Postal,
      },
      contact: {
        phone: newContact_Phone,
        cell: newContact_Cell,
        email: newContact_Email,
      }
    })
    
    console.log(profile)
    res.json({ status: 'ok' })
  } catch (err) {
    res.json({ status: 'error', error: 'Profile not created' })
  }
})

// Post Appointment
app.post('/api/patientrecords/appointment', async (req, res) => {
  try {
    const newAppointmentName = await bcrypt.hash(req,body.appointment.name, 10) | '' 
    const newAppointmentDate = await bcrypt.hash(req,body.appointment.date, 10) | '' 
    const newAppointmentDuration = await bcrypt.hash(req,body.appointment.duration, 10) | ''  
    const newAppointmentAddress = await bcrypt.hash(req,body.appointment.address, 10) | '' 

    const appointment = await patientRecords({
      appointment: {
        name: newAppointmentName,
        date: newAppointmentDate,
        duration: newAppointmentDuration,
        address: newAppointmentAddress,
      }
    })
    console.log(appointment)
    res.json({ status: 'ok' })
  } catch (err) {
    res.json({ status: 'error', error: 'Record could not added'})
  }
})

// Post Records (BP/Pulse/Insertion/Etc.)
app.post('/api/patientrecords/bplist', async (req, res) => {
  try {
    const newBpDate = await bcrypt.hash(req,body.bplist.date, 10) | '' 
    const newBpBp = await bcrypt.hash(req,body.bplist.bp, 10) | '' 
    const newBplistPulse = await bcrypt.hash(req,body.bplist.pulse, 10) | ''  
    const newBplistInsertion = await bcrypt.hash(req,body.bplist.insertion, 10) | '' 

    const bplist = await patientRecords({
      bplist: {
        date: newBpDate,
        bp: newBpBp,
        pulse: newBplistPulse,
        insertion: newBplistInsertion,
        approved: req.body.bplist.approved,
      }
    })
    console.log(appointment)
    res.json({ status: 'ok' })
  } catch (err) {
    res.json({ status: 'error', error: 'Record could not added'})
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