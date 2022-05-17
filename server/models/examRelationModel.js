const mongoose = require('mongoose')

const examRelationSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'Please add a User value'],
      ref:'User'
    },
    CurrentExam: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'Please add a Exam value'],
      ref:'Exam'
    }
  }
)

module.exports = mongoose.model('examRelation', examRelationSchema)