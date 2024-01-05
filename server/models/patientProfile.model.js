const { default: mongoose } = require('mongoose')
const moongose = require('mongoose')

const patientProfile = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    fullName: { type: String },
    dob: { type: String },
    age: { type: Number },
    gender: { type: String },
    height: { type: String },
    weight: { type: String },
    careCard: { type: Number },
    familyDoctor: {type: String},
    location: [{
        address: { type: String},
        city: { type: String},
        province: { type: String},
        postal: { type: String},
    }],
    contact: [{
        phone: { type: String},
        cell: { type: String},
        email: { type: String},
    }],
    appointment: [{
        name: { type: String },
        date: { type: String },
        duration: { type: String },
        address: { type: String},
    }],
    records: [{
        bplist: [{
            date: { type: String },
            bp: { type: String },
            pulse: { type: Number},
            insertion: { type: String},
            approved: { type: Boolean }
        }],
    }],
  },
  { collection: 'patientProfile' }
)

const model = mongoose.model('UserData', patientProfile)

module.exports = model
