const mongoose = require("mongoose");
const Validator = require("validator");


const foodItemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
    trim: true,
    minLength: 3,
    maxLength: 50,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  description: {
    type: String,
    maxLength: 300,
    trim: true,
  },
  category: {
    type: String,
    enum: ["Starter", "Main Course", "Dessert", "Beverage", "Snack"], // Add categories as needed
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  image: {
    type: String, // URL or file path for the food item's image
  },
  ratings: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLenght: 50,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email format");
      }
    },
  },
  phoneNumber: {
    type: String,
    required: true,
    validate: {
      validator: (value) => /^\d{10}$/.test(value), // Assuming a 10-digit format
      message: "Phone number must be 10 digits.",
    },
  },
  description: {
    type: String,
    maxLength: 500,
    trim: true,
  },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    zipCode: { type: String, required: true },
  },
  openingHours: {
    type: String,
    required: true,
  },
  menu: [
    {
      categoryName: { type: String, required: true },
      items: [foodItemSchema],
    },
  ],
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
  reviews: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      reviewText: { type: String, maxLength: 500 },
      rating: { type: Number, min: 0, max: 5 },
      createdAt: { type: Date, default: Date.now },
    },
  ],
  image: {
    type: String, // URL or file path for restaurant's image
  },
});

const Restaruant = mongoose.model("Restaruant", restaurantSchema);
const FoodItem = mongoose.model('FoodItem', foodItemSchema);
module.exports = {Restaruant, FoodItem}
