const express = require('express');
const { body } = require('express-validator');
const auth = require('../middleware/auth');
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
} = require('../controllers/postController');

const router = express.Router();

// Validation rules
const postValidation = [
  body('title')
    .trim()
    .isLength({ min: 1, max: 200 })
    .withMessage('Title must be between 1 and 200 characters'),
  body('content')
    .trim()
    .isLength({ min: 1, max: 5000 })
    .withMessage('Content must be between 1 and 5000 characters')
];

router.get('/', getAllPosts);


router.get('/:id', getPostById);


router.post('/', auth, postValidation, createPost);


router.put('/:id', auth, postValidation, updatePost);

router.delete('/:id', auth, deletePost);

module.exports = router;
