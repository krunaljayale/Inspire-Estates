const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { isLoggedIn} = require("../middleware.js");
const {saveRedirectUrl } = require("../middleware.js");


const userController = require("../controllers/users.js");

router.route("/signup")
.get(userController.renderSignUpForm)
.post( wrapAsync(userController.signUp));


router.route("/login")
.get(userController.renderLoginForm)
.post(saveRedirectUrl, passport.authenticate("local", { failureRedirect : "/login", failureFlash: true }),userController.login);


router.get("/logout",isLoggedIn, userController.logout);


module.exports = router;