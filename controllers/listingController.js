const ExpressError = require('../utils/ExpressError.js');
const Listing = require("../models/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });


module.exports.indexPage = async (req, res) => {
    const { category, search } = req.query;
    let filter = {};

    if (category) {
        filter.category = category;
    }

    if (search) {
        // Case-insensitive search in title, location, or country
        filter.$or = [
            { title: { $regex: search, $options: "i" } },
            { location: { $regex: search, $options: "i" } },
            { country: { $regex: search, $options: "i" } }
        ];
    }

    const allListings = await Listing.find(filter);
    res.render("listings/index.ejs", { allListings, selectedCategory: category, search });
};

// Add form Route - SPECIFIC ROUTE FIRST
module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};


// Show Individual Route 
module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author",
                select: "username" // Optional: Only get the username
            }
        })
        .populate("owner");

    if (!listing) {
        req.flash("error", "Listing does not exist !");
        return res.redirect("/listings");
    }

    res.render("listings/show.ejs", { listing });
};

// Add Listing Route
module.exports.addNewListing = async (req, res) => {

    let mapResponse = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1
    }).send();

    const url = req.file.path;
    const filename = req.file.filename;

    // Ensure category is always an array (even if only one or none selected)
    let categories = req.body.listing.category;
    if (!categories) {
        categories = [];
    } else if (!Array.isArray(categories)) {
        categories = [categories];
    }

    const newListing = new Listing({
        ...req.body.listing,
        category: categories
    });
    newListing.owner = req.user._id;
    newListing.image = { url, filename };
    newListing.geometry = mapResponse.body.features[0].geometry;
    let savedListing = await newListing.save();
    console.log(savedListing);
    req.flash("success", "New Listing Created");
    res.redirect("/listings");
};




// Edit form route 
module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing does not exist !");
        return res.redirect("/listings");
    }
    let originalUrl = listing.image.url;
    originalUrl = originalUrl.replace("/upload", "/upload/w_200");
    res.render("listings/edit.ejs", { listing, originalUrl });
};

// Editing route
module.exports.updateListing = async (req, res) => {
    let { id } = req.params;

    if (!req.body.listing) {
        throw new ExpressError(400, "Send valid data for listing");
    }
    let listing = await Listing.findByIdAndUpdate(id, req.body.listing, {
        new: true,
        runValidators: true
    });
    if (typeof req.file != "undefined") {
        const url = req.file.path;
        const filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }

    req.flash("success", "Listing Updated");
    console.log("Update successful");
    res.redirect(`/listings/${id}`);
};

// Delete route
module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted");
    console.log("Successfully Deleted");
    res.redirect("/listings");
};