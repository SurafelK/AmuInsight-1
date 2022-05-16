const mongoose = require('mongoose')

const noteSchema = mongoose.Schema(
  {
    courseName: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    title: {
      type: String,
      required: [true, 'Please add a text value'],
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

module.exports = mongoose.model('note', noteSchema)