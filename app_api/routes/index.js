var express = require('express');
var router = express.Router();
var ctrlList = require('../controllers/list');
var ctrlReviews = require('../controllers/reviews');

//router.get('/books', ctrlList.booksListByDistance);
router.post('/locations', ctrlList.locationsCreate);
router.get('/locations/:locationid', ctrlList.locationsReadOne);
router.put('/locations/:locationid', ctrlList.locationsUpdateOne);
router.delete('/locations/:locationid', ctrlList.locationsDeleteOne);

// reviews
router.post('/locations/:locationid/reviews', ctrlReviews.reviewsCreate);
router.get('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsReadOne);
router.put('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsUpdateOne);
router.delete('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsDeleteOne);

module.exports = router;
