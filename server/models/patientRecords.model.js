const { default: mongoose } = require('mongoose')
const moongose = require('mongoose')

const patientRecords = new mongoose.Schema(
    {
    appointment: [{ //Sensetive Info
        name: { type: String },
        date: { type: String },
        duration: { type: String },
        address: { type: String},
    }],
    bplist: [{ //Sensetive Info
        date: { type: String },
        bp: { type: String },
        pulse: { type: Number},
        insertion: { type: String},
        approved: { type: Boolean }
    }],
    },
    { collection: 'patientRecords' }
)

const model = mongoose.model('UserData', patientRecords)

model.exports = model