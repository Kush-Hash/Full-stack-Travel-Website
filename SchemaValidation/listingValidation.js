const Joi = require("joi");

const listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required().messages({
            'string.empty': 'Title is required.'
        }),
        description: Joi.string().required().messages({
            'string.empty': 'Description is required.'
        }),
        location: Joi.string().required().messages({
            'string.empty': 'Location is required.'
        }),
        country: Joi.string().required().messages({
            'string.empty': 'Country is required.'
        }),
        price: Joi.number().min(0).required().messages({
            'number.base': 'Price must be a number.',
            'number.min': 'Price cannot be negative.',
            'any.required': 'Price is required.'
        }),
        image: Joi.object({
            filename: Joi.string().allow("").default(""),
            url: Joi.string().uri().allow("").default("https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg")
        }).default({
            filename: "",
            url: "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg"
        })
    }).required()
});

module.exports = listingSchema;
