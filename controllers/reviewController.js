const Review = require('../models/review.js');
const Listing = require("../models/listing.js");

//add review route
module.exports.addReview = async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    const newReview = new Review(req.body.review);
    newReview.author = req.user._id;

    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    console.log("Review added");
    req.flash("success", "Review Added");
    res.redirect(`/listings/${id}`);
};

//delete review route
module.exports.deleteReview = async (req, res, next) => {
    let { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, { $pull: { review: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review deleted");

    res.redirect(`/listings/${id}`);
};