const asyncHandler = require('express-async-handler');

const Exam = require('../models/examModel');
const ExamRelation = require('../models/examRelationModel');

// @desc    Get exams   @route   GET /api/posts @access  Private
const getExams = asyncHandler(async (req, res) => {
    const exams = await Exam.find();
  
    res.status(200).json(exams);
  })

// @desc    Set exam    @route   POST /api/posts    @access  Private
const setExam = asyncHandler(async (req, res) => {
    if(!req.body.courseName||!req.body.year||!req.body.fileLocation){
      res.status(400)
      throw new Error('Please insert all fields')
    }

    const exam = await Exam.create({
      courseName: req.body.courseName,
      year: req.body.year,
      fileLocation: req.body.fileLocation,
      status: req.body.status
    });

    // const examRelation = await ExamRelation.create({
    //   CurrentExam: exam.id,
    //   user: user.id,
    // });
  
    res.status(200).json(exam)
})

// @desc    Update exam @route   PUT /api/goals/:id @access  Private
const updateExam = asyncHandler(async (req, res) => {
    const exam = await Exam.findById(req.params.id)

    if (!exam) {
        res.status(400)
        throw new Error('Exam not found')
    }

    const updatedExam = await Exam.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedExam)
})

// @desc    Delete exam @route   DELETE /api/goals/:id  @access  Private
const deleteExam = asyncHandler(async (req, res) => {
    const exam = await Exam.findById(req.params.id)
    // const user = await Exam.findById(req.params.id)

    if (!exam) {
        res.status(400)
        throw new Error('Exam not found')
    }

    await Exam.deleteOne()
    // await ExamRelation.deleteOne()

    res.status(200).json({id: req.params.id})
})

  module.exports = {
    getExams,
    setExam,
    updateExam,
    deleteExam,
}

