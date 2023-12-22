const { default: mongoose } = require('mongoose')
const moongose = require('mongoose')

const User = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true }
  },
  { collection: 'users' }
)

const model = mongoose.model('UserData', User)

module.exports = model
