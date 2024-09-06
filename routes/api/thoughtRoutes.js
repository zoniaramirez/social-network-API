// routes/thoughtRoutes.js
const router = require('express').Router();
const {
  getThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/')
  .get(getThoughts)
  .post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
  .post(addReaction);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;