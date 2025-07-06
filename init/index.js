const mongoose = require("mongoose");
const initData = require("./data.js")
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust"
main()
    .then(() => {
        console.log("Database Connected successfully")
    }).catch(err => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    try {
        await Listing.deleteMany({});
        initData.data = initData.data.map((obj) => ({
            ...obj,
            owner: "685bd8a1fa8d4637aa2c198c"
        }));
        await Listing.insertMany(initData.data);
        console.log("Database is Initialzed..")
    } catch (err) {
        console.error(err);
    }
}

initDB();