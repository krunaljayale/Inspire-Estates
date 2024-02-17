const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email:{
        type:String,
        required:true
    },
});

userSchema.plugin(passportLocalMongoose);
// This plugin helps us to create salted and hashed username and password automatically


module.exports = mongoose.model("User", userSchema);