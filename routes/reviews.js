const router = require('express').Router({ mergeParams: true });

// Courses controller methods
const { getReviews, getReview } = require('../controllers/reviews');

const Review = require('../models/Review');
const advancedResults = require('../middlewares/advancedResults');

const { protect, authorize } = require('../middlewares/auth');

router.route('/').get(
  advancedResults(Review, {
    path: 'bootcamp',
    select: 'name description'
  }),
  getReviews
);

router.route('/:id').get(getReview);

module.exports = router;
