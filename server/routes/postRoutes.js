const express = require('express')
const router = express.Router()
const {
  getPosts,
  setPost,
  updatePost,
  deletePost,
} = require('../controllers/postControllers')

router.route('/').get(getPosts).post(setPost)
router.route('/:id').delete(deletePost).put(updatePost)

module.exports = router