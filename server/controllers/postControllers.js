const asyncHandler = require('express-async-handler');

const Exam = require('../models/examModel');
const Note = require('../models/noteModel');

// @desc    Get posts   @route   GET /api/posts @access  Private
const getPosts = asyncHandler(async (req, res) => {
  const exams = await Exam.find();
  const notes = await Note.find();

  res.status(200).json(exams);
  res.status(200).json(notes);
})

module.exports = {
  getPosts,
}