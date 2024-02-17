const Listing = require("./models/listing.js");
const Review = require("./models/review.js");


module.exports.isLoggedIn = (req,res,next)=> {
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in to create listing");
        res.redirect("/login");
    }else{
        next();
    }
};


// This middleware is for getting original path user was exploring before login and after he logged in will redirect automatically to that page
module.exports.saveRedirectUrl = (req,res,next)=> {
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};


//    This operation is for Authorization
module.exports.isOwner = async(req,res,next) =>{
    let {id} = req.params;
    let listing =  await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currUser._id)){
        req.flash("error", "You are not Owner");
        return res.redirect(`/listings/${id}`);
   }
   next();
};

module.exports.isReviewAuthor = async(req,res,next) =>{
    let {id,reviewId} = req.params;
    let review =  await Review.findById(reviewId);
    if(!review.author._id.equals(res.locals.currUser._id)){
        req.flash("error", "You are not Owner");
        return res.redirect(`/listings/${id}`);
   }
   next();
};