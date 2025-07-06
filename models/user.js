const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    }

})

userSchema.plugin(passportLocalMongoose); //this will create the password feild, username,hash , salting

const user = new mongoose.model("user", userSchema);
module.exports = user;