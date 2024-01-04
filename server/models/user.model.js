const { default: mongoose } = require('mongoose')
const moongose = require('mongoose')

const User = new mongoose.Schema(
  {
    role: { type: String, required: true },
    password: { type: String, required: true },
    fullName: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    quote: { type: String },
  },
  { collection: 'users' }
)

const model = mongoose.model('UserData', User)

module.exports = model
