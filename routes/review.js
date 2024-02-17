const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const { reviewSchema } = require("../schema.js");
const ExpressError = require ("../utils/ExpressError.js");
const {isLoggedIn,isReviewAuthor} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

const validateReview = (req,res,next)=>{
    let { error } = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
};

// Review Post Route
router.post("/",isLoggedIn,
validateReview,
wrapAsync(reviewController.postReview));

// Delete Review Route
router.delete("/:reviewId", isLoggedIn,isReviewAuthor,wrapAsync(reviewController.deleteReview));

module.exports = router;