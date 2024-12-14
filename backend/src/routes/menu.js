const express= require('express');
const menuRouter= express.Router();
const userAuth= require('../middleware/auth');
const {Restaurant}= require('../models/restaurants');

menuRouter.get('/api/restaurants/:id/menu',userAuth, async(req,res)=>{
    try{
        const loggedInUser= req.user;
        const restaurantId= req.params.id;
        if(!loggedInUser){
            res.status(400).json({message: "User not found"});
        }
        const restaurant= await Restaurant.findById(restaurantId).select('menu');
        if(!restaurant){
            res.status(400).json({message: "Restaurant not found"})
        }
        res.send(restaurant);

    }catch(err){
        res.status(400).json({message: "Error to find restaurant", err})
    }
});


module.exports=menuRouter;