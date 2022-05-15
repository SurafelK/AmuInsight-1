const asyncHandler = require('express-async-handler')

// @desc    Get posts   @route   GET /api/posts @access  Private
const getPosts = asyncHandler(async (req, res) => {
  res.status(200).json('get posts')
})

// @desc    Set post    @route   POST /api/posts    @access  Private
const setPost = asyncHandler(async (req, res) => {
  res.status(200).json('create post')
})

// @desc    Update goal @route   PUT /api/goals/:id @access  Private
const updatePost = asyncHandler(async (req, res) => {
  res.status(200).json('updatedGoal')
})

// @desc    Delete goal @route   DELETE /api/goals/:id  @access  Private
const deletePost = asyncHandler(async (req, res) => {
  res.status(200).json('delete post')
})

module.exports = {
  getPosts,
  setPost,
  updatePost,
  deletePost,
}