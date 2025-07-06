const express = require("express");
const wrapAsync = require('../utils/wrapAsync.js');
const { reviewValidate, isLoggedIn, isReviewAuthor } = require("../middleware.js");
const reviewController = require("../controllers/reviewController.js");
const router = express.Router({ mergeParams: true });

router.post("/", isLoggedIn, reviewValidate, wrapAsync(reviewController.addReview));

router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.deleteReview));

module.exports = router;
