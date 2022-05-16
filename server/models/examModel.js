const mongoose = require('mongoose')

const examSchema = mongoose.Schema(
  {
    courseName: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    year: {
      type: Date,
      required: [true, 'Please add a year value'],
    },
    fileLocation: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    status: {
      type: String,
      default: 'pending',
    }
  }
)

module.exports = mongoose.model('exam', examSchema)