const express = require("express");
const wrapAsync = require('../utils/wrapAsync.js');
const router = express.Router({ mergeParams: true });
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/userController.js");

router.get("/register", userController.renderSignupForm);

router.post("/register", wrapAsync(userController.addNewUser));

router.get("/login", userController.renderLoginPage);

router.post("/login", saveRedirectUrl, passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true
}), userController.authenticateLogin);

router.get("/logout", userController.logout);


module.exports = router;