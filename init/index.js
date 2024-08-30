const mongoose = require("mongoose");
const initData = require("./newData.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");

const dbUrl = "mongodb+srv://krunaljayale:9284454408%40Kk@cluster0.gu3ftln.mongodb.net/";
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
async function main(){
    await mongoose.connect(dbUrl);
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
        {...obj, owner:"65eca41c401d7387586023fd"}
    ));
    await Listing.insertMany(initData.data);
    console.log("Data was initialised");
};

// const findUser = async()=>{
//     let users= await User.find({});
//     console.log(users)
// }
