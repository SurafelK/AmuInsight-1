const express = require('express')
const router = express.Router()

const {
  getPosts,
} = require('../controllers/postControllers')

const {
  getExams,
  setExam,
  updateExam,
  deleteExam,
} = require('../controllers/examControllers')

const {
  getNotes,
  setNote,
  updateNote,
  deleteNote,
} = require('../controllers/noteControllers')

router.route('/').get(getPosts)
router.route('/exam').get(getExams).post(setExam)
router.route('/note').get(getNotes).post(setNote)
router.route('/exam/:id').delete(deleteExam).put(updateExam)
router.route('/note/:id').delete(deleteNote).put(updateNote)

module.exports = router