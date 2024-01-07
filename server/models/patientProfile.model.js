const { default: mongoose } = require('mongoose')
const moongose = require('mongoose')

const patientProfile = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    fullName: { type: String },
    dob: { type: String }, //Sensetive Info
    age: { type: Number },
    gender: { type: String },
    height: { type: String },
    weight: { type: String },
    careCard: { type: Number }, //Sensetive Info
    familyDoctor: {type: String},
    location: [{ //Sensetive Info
        address: { type: String},
        city: { type: String},
        province: { type: String},
        postal: { type: String},
    }],
    contact: [{ //Sensetive Info
        phone: { type: String},
        cell: { type: String},
        email: { type: String},
    }],
  },
  { collection: 'patientProfile' }
)

const model = mongoose.model('PatientProfile', patientProfile)

module.exports = model
