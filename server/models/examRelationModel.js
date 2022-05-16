const mongoose = require('mongoose')

const examRelationSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'Please add a User value'],
      ref:'User'
    },
    exam: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'Please add a Note value'],
      ref:'Exam'
    }
  }
)

module.exports = mongoose.model('examRelation', examRelationSchema)