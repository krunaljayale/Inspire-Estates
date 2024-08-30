if(process.env.NODE_ENV != "production"){
    require('dotenv').config()
}


const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require ("./utils/ExpressError.js");
const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const wrapAsync = require("./utils/wrapAsync.js");
const listingContoller = require("./controllers/listings.js");

const MONGO_URL= process.env.MONGO_URL;
// const MONGO_URL = process.env.ATLASDB_URL;

main()
    .then(()=>{
    console.log("Connected to DB")
    }).catch((err)=>{
        console.log("Some Error In DB")
    });

async function main(){
    await mongoose.connect(MONGO_URL);
}


// Required Stuff
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));
app.use(cookieParser());





const store = MongoStore.create({
    mongoUrl:MONGO_URL,
    crypto: {
        secret: process.env.SECRET,
      },
    touchAfter: 24 * 3600
});

store.on("error" ,()=>{
    console.log("ERROR in Mongo Session Store", err)
});


const sessionOptions = {
    store:store,
    secret:process.env.SECRET,
    resave:false, 
    saveUninitialized:true,
    cookie:{
        expires:Date.now() + 7 * 24 * 60 * 60 *1000,
        maxAge: 7 * 24 * 60 * 60 *1000,
        httpOnly: true,
    }
};


app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});


app.get("/",wrapAsync(listingContoller.index));

app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter );
app.use("/", userRouter );


app.all("*",(req,res,next)=>{
    next(new ExpressError(404, "Page Not Found!"));
})

app.use((err,req,res,next)=>{
    let { statusCode = 500, message = "Something went wrong" } = err;
    res.status(statusCode).render("error.ejs",{err});
});


app.listen(8080,()=>{
    console.log("SERVER is ON");
});