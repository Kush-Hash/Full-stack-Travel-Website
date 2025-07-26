const user = require("../models/user.js");

module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
};

module.exports.addNewUser = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new user({
            email: email,
            username: username
        })
        const registerUser = await user.register(newUser, password);
        console.log(registerUser);
        req.login(registerUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to wanderlust");
            res.redirect("/listings/home");
        })
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/register");

    }
};

module.exports.renderLoginPage = (req, res) => {
    res.render("users/login.ejs");
};

module.exports.authenticateLogin = (req, res) => {
    req.flash("success", "Welcome to wanderlust");
    const redirectUrl = res.locals.redirectUrl || "/listings/home";
    res.redirect(redirectUrl);
};

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);  // Pass error to error handler if any
        }
        req.flash("success", "You are successfully logged out.");
        res.redirect("/listings/home");
    });
};