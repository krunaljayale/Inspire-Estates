const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
async function main(){
    await mongoose.connect(MONGO_URL);
}

main().then(()=>{
    console.log("connected to DB");
    initDB();
}).catch((err)=>{
    console.log("Some Error In DB")
});

const initDB = async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) =>(
        {...obj, owner:"65be67fbcbf6845255d1adc2"}
    ));
    await Listing.insertMany(initData.data);
    console.log("Data was initialised");
};

