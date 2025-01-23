const express = require("express");

const authRouter = express.Router();
const { validateSignUpUser } = require("../utils/validation");
const { validateContactUs } = require("../utils/validation");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const Validator = require("validator");
const userAuth = require("../middleware/auth");
const ContactUs = require("../models/contactus");
/**Creating the signup API */
authRouter.post("/api/users/signup", async (req, res) => {
  try {
    const { firstName, lastName, emailId, password, role } = req.body;
    validateSignUpUser(req);

    const HASHED_PASSWORD = await bcrypt.hash(password, 10);

    const user = new User({
      firstName,
      lastName,
      emailId,
      password: HASHED_PASSWORD,
      role: role || "user",
    });

    await user.save();
    res.status(200).json({
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
      return res.status(400).json({
        message: "user not found",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }

    const token = await jwt.sign(
      { _id: user._id },
      process.env.SERVER_SECRET_CODE,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, { httpOnly: true });
    res.status(200).json({
      message: "user logged in successfully",
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        emailId: user.emailId,
      },
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
});
/*Developing the Logout API */
authRouter.post("/api/users/logout", async (req, res) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
    });
    res.json({
      message: "user logged out successfully",
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

/*Devaloping the contact us API */

authRouter.post("/api/users/contactus", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;

    const { firstName, lastName, emailId, phoneNumber, message } = req.body;
    if (!loggedInUser) {
      return res.status(400).json({
        message: "User not found",
      });
    }
    validateContactUs(req);

    const contactUs = new ContactUs({
      firstName,
      lastName,
      emailId,
      phoneNumber,
      message,
    });

    await contactUs.save();
    res.status(200).json({
      message: "Contact Us form submitted successfully",
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = authRouter;
