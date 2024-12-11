const express = requrie("express");
const restaurantRouter = express.Router();
const userAuth = require("../middleware/auth");
const { Restaurant } = require("../models/restaurants");

/**Get All Restaurant API */
restaurantRouter.get("/api/restaurants", userAuth, async (req, res) => {
  try {
    const restaurants = await Restaurant.find({});
    res.status(200).json({ data: restaurants });
  } catch (err) {
    res.status(500).json({ message: "Error fetching restaurants", error });
  }
});

module.exports = restaurantRouter;
