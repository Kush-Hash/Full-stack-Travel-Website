const mongoose = require("mongoose");
const Review = require("./review");
const user = require("./user");

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    image: {
        type: {
            filename: String,
            url: String
        },
        default: {
            filename: "",
            url: "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg"
        },
        set: (v) => {
            if (!v || v === "") {
                return {
                    filename: "",
                    url: "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg"
                };
            }
            return v;
        }
    },
    price: {
        type: Number
    },
    location: {
        type: String
    },
    country: {
        type: String
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "review"
        }
    ],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    geometry: {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    category: [{
        type: String,
        enum: ["rooms", "famous_city", "mountain", "beach", "artic", "palace", "pools", "camping", "farm", "forests"]
    }]
});

//cascading delete , when delete is call in listing schema this middleware will be executed.
listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews } })

    }
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;