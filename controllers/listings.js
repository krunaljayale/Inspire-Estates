const Listing = require("../models/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });



module.exports.index = async(req, res)=>{
    const allListings =  await Listing.find({});
    res.render("listings/index.ejs", {allListings});
};

module.exports.renderNewForm = (req,res)=>{
res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res)=>{
    let {id} = req.params;
   const listing = await Listing.findById(id).populate({path: "reviews", 
    populate:{
    path:"author"
        },
    }).populate("owner");
   if(!listing){
    req.flash("error", "Listing does not exists");
    res.redirect("/listings");
   }
   res.render("listings/show.ejs", {listing});
};


module.exports.createListing =  async(req,res,next)=>{
    let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1
      })
    .send();
        
   

    let url = req.file.path;
    let filename = req.file.filename;
    // let { title,description,image,price,location,country } = req.body;
//  const newListing = new Listing(req.body.listing); We can use this direct code also instead of below line of code. we just have to add listing[ name ] instead of direct name in the new.ejs file
    const newListing = new Listing({...req.body.listing});
    newListing.owner = req.user._id;
    newListing.image = { url, filename};
    newListing.geometry = response.body.features[0].geometry;
    let savedListing = await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
};

module.exports.editListing = async(req,res)=>{
    const listing = await Listing.findById(req.params.id);
    if(!listing){
        req.flash("error", "Listing does not exists");
        res.redirect("/listings");
       }
    // This is for if we want to preview image in the edit form
    // let originalImage = listing.image.url;
    // let image = originalImage.replace("/upload", "/upload/w_250 ");
    res.render("listings/edit.ejs",{listing })
};

module.exports.updateListing = async(req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});

    if(typeof req.file != "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename};
        await listing.save();
    }
    
   req.flash("success", "Listing Updated");
   res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async(req,res)=>{
    let {id} = req.params;
  await  Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted");
  res.redirect("/listings");
};