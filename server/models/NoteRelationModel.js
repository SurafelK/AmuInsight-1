const mongoose = require('mongoose')

const NoteRelationSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'Please add a User value'],
      ref:'User'
    },
    note: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'Please add a Note value'],
      ref:'Note'
    }
  }
)

module.exports = mongoose.model('NoteRelation', NoteRelationSchema)