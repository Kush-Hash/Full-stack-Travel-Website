if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejsMate = require('ejs-mate');
const ExpressError = require('./utils/ExpressError.js');
const listingRouter = require("./routes/listingRouter.js");
const reviewRouter = require("./routes/reviewRouter.js");
const userRouter = require("./routes/userRouter.js");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const user = require("./models/user.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);

// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust"
const dburl = process.env.ATLASDB_URL;

main()
    .then(() => {
        console.log("Database Connected Successfully")
    }).catch(err => console.log(err));

async function main() {
    await mongoose.connect(dburl);
}

const store = MongoStore.create({
    mongoUrl: dburl,
    crypto: {
        secret: process.env.SECRET
    },
    touchAfter: 24 * 3600,
});

store.on("error", () => {
    console.log("ERROR in MONGO SESSION STORE", err);
});

const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    }
};

app.use(session(sessionOptions));
app.use(flash()); // this should be before calling routes

//authentication
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

//flash message
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUsr = req.user; //used in the navbar to see which use is currenly in. and for authorization.
    next();
})


//root route
// app.get('/', (req, res) => {
//     res.send("Hi I am root");
// })


//using express router
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);


// ------- Middle Wares -------

//For all routes except the mentioned ones
app.all(/.*/, (req, res, next) => {
    const err = new ExpressError(404, "Page not Found!");
    next(err);
});

// Error handling middleware
app.use((err, req, res, next) => {
    err.status = err.status || 500;
    err.message = err.message || "Something went wrong!";
    console.log(err); // Optional debug
    res.status(err.status).render("listings/error.ejs", { err });
});

const PORT = 8081;
app.listen(PORT, () => {
    console.log("Connected to port 8081");
})