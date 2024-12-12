const express = require("express");
const restaurantRouter = express.Router();
const userAuth = require("../middleware/auth");
const {validRestaurantsFields}= require('../utils/validation');
const { Restaurant } = require("../models/restaurants");


const RESTAURANT_PUBLIC_DATA= "name phoneNumber description address openingHours menu rating reviews image"
/**Register new Restaurant API */
restaurantRouter.post("/api/add/restaurants", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;
    if (!loggedInUser) {
      return res.status(400).json({ message: "User not found" });
    }
    const {
      name,
      emailId,
      phoneNumber,
      description,
      address,
      openingHours,
      menu,
      rating,
      reviews,
    } = req.body;
    validRestaurantsFields(req);
    const restaurantInfo = new Restaurant({
      name,
      emailId,
      phoneNumber,
      description,
      address,
      openingHours,
      menu,
      rating,
      reviews,
    });
    await restaurantInfo.save();
    res.status(200).json({ message: "Your restaurant register successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to register a restaurant" });
  }
});

/**Get All Restaurant API */
restaurantRouter.get("/api/view/restaurants", userAuth, async (req, res) => {
  try {
    const restaurants = await Restaurant.find({});
    res.status(200).json({ data: restaurants });
  } catch (err) {
    res.status(500).json({ message: "Error fetching restaurants", error });
  }
});

/**Get Restaurant by ID API */
restaurantRouter.get('/api/view/restaurants/:id', userAuth, async(req,res)=>{
  try{
    const loggedInUser= req.user;
    const restaurantId= req.params.id;
    if(!loggedInUser){
      return res.status(400).json({message: "User not found"});
    }
    const restaurant= await Restaurant.findById(restaurantId).select(RESTAURANT_PUBLIC_DATA);
    if(!restaurant){
      return res.status(400).json({message:"Restaurant not found"});
    }
    res.status(200).json({
      message: "Restaurant  found successfully",
      restaurant
    });


  }catch(err){
    res.status(500).json({ message: "Error fetching restaurant", error });
  }
})

/**Delete Restaurant by ID API */
restaurantRouter.delete('/api/delete/restaurants/:id',userAuth,async(req,res)=>{
  try{
    const loggedInUser= req.user;
    const restaurantId= req.params.id;
    if(!loggedInUser){
      return res.status(400).json({message : "User not found"});
    }
    const restaurant= await Restaurant.findByIdAndDelete(restaurantId);
    if(!restaurant){
      return res.status(400).json({message: "Restaurnat not found"});
    }
    res.status(200).json({message: "Restaurant deleted successfully"});

  }catch(err){
    res.status(500).json({ message: "Error deleting restaurant", error })
  }
})

module.exports = restaurantRouter;
