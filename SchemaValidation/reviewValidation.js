const Joi = require("joi");

const reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().min(0).max(5),
        comment: Joi.string().required()
    }).required()
});

module.exports = reviewSchema;