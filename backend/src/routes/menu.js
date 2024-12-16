const express = require("express");
const menuRouter = express.Router();
const userAuth = require("../middleware/auth");
const isAdmin = require("../middleware/isAdmin");
const { Restaurant } = require("../models/restaurants");
const {FoodItem}= require('../models/restaurants');
/**Creating the API to get restaurant menu by id by user*/
menuRouter.get(
  "/api/restaurants/getMenu/:id/menu",
  userAuth,
  async (req, res) => {
    try {
      const loggedInUser = req.user;
      const restaurantId = req.params.id;
      if (!loggedInUser) {
        res.status(400).json({ message: "User not found" });
      }
      const restaurant = await Restaurant.findById(restaurantId).select("menu");
      if (!restaurant) {
        res.status(400).json({ message: "Restaurant not found" });
      }
      res.status(200).json(restaurant.menu);
    } catch (err) {
      res
        .status(400)
        .json({ message: "Error fetching restaurant menu", err: err.message });
    }
  }
);

/** Creating the API to add menu items to the restaurant by admin */
menuRouter.post(
  "/api/restaurants/addItem/:id/menu",
  userAuth,
  isAdmin,
  async (req, res) => {
    try {
      const loggedInUser  = req.user;
      const restaurantId = req.params.id; // Get restaurant ID from params
      const { menu } = req.body; // Get menu from request body

      if (!Array.isArray(menu) || menu.length === 0) {
        return res
          .status(400)
          .json({ message: "Menu must be an array and cannot be empty." });
      }

      if (!loggedInUser ) {
        return res.status(400).json({ message: "User  not found." });
      }

      // Check if the restaurant exists
      const restaurant = await Restaurant.findById(restaurantId);
      if (!restaurant) {
        return res.status(404).json({ message: "Restaurant not found." });
      }

      // Process each category in the menu
      for (const category of menu) {
        const { categoryName, items } = category;

        // Validate categoryName
        if (!categoryName) {
          return res
            .status(400)
            .json({ message: "Category name is required." });
        }

        // Validate items
        if (!Array.isArray(items) || items.length === 0) {
          return res
            .status(400)
            .json({ message: "Items must be an array and cannot be empty." });
        }

        // Process each item in the category
        for (const item of items) {
          const {
            itemName,
            price,
            description,
            category, // This should be the item category, not the menu category
            isAvailable,
            image,
            ratings,
          } = item;

          // Validate food item attributes
          if (!itemName || !price || !category) {
            return res.status(400).json({
              message: "Item name, price, and category are required.",
            });
          }

          // Create a new food item linked to the restaurant
          const newFoodItem = new FoodItem({
            itemName,
            price,
            description,
            category,
            isAvailable,
            image,
            ratings,
            restaurantId: restaurantId, // Correctly link the food item to the restaurant ID
          });
          await newFoodItem.save();

          // Add the item to the restaurant's menu
          const categoryIndex = restaurant.menu.findIndex(
            (menuCategory) => menuCategory.categoryName === categoryName
          );

          if (categoryIndex !== -1) {
            // Category exists, add the item
            restaurant.menu[categoryIndex].items.push(newFoodItem._id); // Push the food item ID
          } else {
            // Category does not exist, create a new one
            restaurant.menu.push({
              categoryName,
              items: [newFoodItem._id], // Push the food item ID
            });
          }
        }
      }

      // Save the updated restaurant document
      await restaurant.save();

      // Respond with success message
      res.status(201).json({ message: "Menu added successfully." });
    } catch (err) {
      res.status(500).json({ message: "Error adding menu item.", error: err.message });
    }
  }
);


menuRouter.delete(' /api/restaurants/:id/menu/delete/:itemId', userAuth, isAdmin, async(req,res)=>{
  try{
    const loggedInUser= req.user;
    const restaurantId= req.params.id;
    const itemId= req.params.id;

    if(!loggedInUser){
      return res.status(400).json({message: "User not found"});
    }

    const restaurant = await Restaurant.findById(restaurantId);
    if(!restaurant){
      return res.status(400).json({message: "Restaurant not found"});
    }
    const item = await FoodItem.findByIdAndDelete(itemId);
    if(!item){
      return res.status(400).json({message :"item not found"});
    }
    res.status(200).json({message: "menu item deleted successfully"});
  }catch(err){
    res.status(400).json({message: "Error to delete menu item", err: err.message});
  }
})
module.exports = menuRouter;
