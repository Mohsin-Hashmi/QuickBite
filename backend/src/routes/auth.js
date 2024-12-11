const express = require("express");

const authRouter = express.Router();
const validateSignUpUser = require("../utils/validation");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const Validator = require("validator");
/**Creating the signup API */
authRouter.post("/api/users/signup", async (req, res) => {
  try {
    const { firstName, lastName, emailId, password } = req.body;
    validateSignUpUser(req);

    const HASHED_PASSWORD = await bcrypt.hash(password, 10);

    const user = new User({
      firstName,
      lastName,
      emailId,
      password: HASHED_PASSWORD,
    });

    await user.save();
    res.json({
      message: "user sign up successfully",
    });
  } catch (err) {
    res.send("ERROR : " + err.message);
  }
});

/** Creating the Login API */
authRouter.post("/api/users/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;

    if (!emailId || !password) {
      return res.status(400).json({
        message: "email and password are required",
      });
    }
    if (!Validator.isEmail(emailId)) {
      throw new Error("Invalid Email");
    }
    const user = await User.findOne({ emailId });
    if (!user) {
      return res.status(401).json({
        message: "user not found",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid Credentials",
      });
    }

    const token = await jwt.sign(
      { _id: user._id },
      process.env.SERVER_SECRET_CODE,
      { expiresIn: "7d" }
    );

    res.cookie("token", token);
    res.status(200).json({
      message: "user logged in successfully", user
    });

  } catch (err) {
    res.status(400).send(err.message);
  }
});

authRouter.post('/api/users/logout', async(req,res)=>{
  try{
    res.cookie("token", null, {
      expires: new Date(Date.now())
    });
    res.json({
      message: "user logged out successfully"
    })
  }catch(err){
    res.status(400).send(err.message);
  }
});

module.exports = authRouter;