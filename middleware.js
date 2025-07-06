const listingSchema = require('./SchemaValidation/listingValidation.js');
const reviewSchema = require('./SchemaValidation/reviewValidation.js');
const Listing = require("./models/listing.js")
const Review = require("./models/review.js")
const ExpressError = require('./utils/ExpressError.js');

//extracting the error from the schema validate (Joi) and throwing error for Listing
module.exports.SchemaValidate = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        throw new ExpressError(400, error.message);
    } else {
        next();
    }
}
//extracting the error from the schema validate (Joi) and throwing error for Reviews
module.exports.reviewValidate = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        throw new ExpressError(400, error.message);
    } else {
        next();
    }
}

//used in the listing routes to check if the user is loggedin before doing any action
module.exports.isLoggedIn = (req, res, next) => {
    console.log(req.user);
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in to manage the listings");
        return res.redirect("/login");
    }
    next();
}

//used to save the originalUrl the user trying to access before login and as session is restarted after each login that's why we are storing it in locals.
module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

//used for authorization to see if the owner/other if the listing is trying to edit or delete
module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing.owner._id.equals(res.locals.currUsr._id)) {
        req.flash("error", "You dont have permission to manage this listing.");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

//used for authorization that the author of the review can delete it only
module.exports.isReviewAuthor = async (req, res, next) => {
    let { id, reviewId } = req.params;
    const review = await Review.findById(reviewId);
    console.log(review.author._id);
    if (!review.author._id.equals(res.locals.currUsr._id)) {
        req.flash("error", "You dont have permission to manage this Review.");
        return res.redirect(`/listings/${id}`);
    }
    next();
}