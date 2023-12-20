const { default: mongoose } = require('mongoose')
const moongose = require('mongoose')

const User = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    quote: { type: String }
  },
  { collection: 'users' }
)

const model = mongoose.model('UserData', User)

module.exports = model
