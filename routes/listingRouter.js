const express = require("express");
const wrapAsync = require('../utils/wrapAsync.js');
const { isLoggedIn, isOwner, SchemaValidate } = require("../middleware.js");
const listingController = require("../controllers/listingController.js");
const multer = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

const router = express.Router({ mergeParams: true });


router.get('/', wrapAsync(listingController.indexPage));

router.get('/new', isLoggedIn, listingController.renderNewForm)

router.get('/:id', wrapAsync(listingController.showListing));

//route to creating new listing
router.post('/', isLoggedIn, SchemaValidate, upload.single("listing[image]"), wrapAsync(listingController.addNewListing));

router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));

router.put("/:id/edit", isLoggedIn, isOwner, upload.single("listing[image]"), SchemaValidate, wrapAsync(listingController.updateListing));

router.delete("/:id", isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

module.exports = router;