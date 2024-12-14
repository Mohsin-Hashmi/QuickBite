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

/**Creating the API to add menu items to the restaurant by admin */
menuRouter.post(
  "/api/restaurants/addItem/:id/menu",
  userAuth,
  isAdmin,
  async (req, res) => {
    try {
      const loggedInUser = req.user;
      const restaurantId = req.params.id;
      const { menu } = req.body;
      if (!Array.isArray(menu) || menu.length === 0) {
        return res
          .status(400)
          .json({ message: "Menu must be an array and cannot be empty" });
      }

      if (!loggedInUser) {
        return res.status(400).json({ message: "User not found" });
      }
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

        for (const item of items) {
          const {
            itemName,
            price,
            description,
            category,
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

          const newItem = new Restaurant({
            itemName,
            price,
            description,
            category,
            isAvailable,
            image,
            ratings,
          });
          await newItem.save();
        }
      }

      // Respond with success message
      res.status(201).json({ message: "Menu added successfully." });
    } catch (err) {
      res
        .status(400)
        .json({ message: "Error to add mnu item", err: err.message });
    }
  }
);
module.exports = menuRouter;
