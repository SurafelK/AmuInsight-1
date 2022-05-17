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

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(getPosts)
router.route('/exam').get(protect,getExams).post(protect,setExam)
router.route('/note').get(protect, getNotes).post(protect, setNote)
router.route('/exam/:id').delete(deleteExam).put(updateExam)
router.route('/note/:id').delete(deleteNote).put(updateNote)

module.exports = router