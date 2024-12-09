const express = require("express");

const authRouter = express.Router();
const validateSignUpUser = require("../utils/validation");
const User = require("../models/user");
const bcrypt = require("bcrypt");
/**Creating the signup API */
authRouter.post("/signup", async (req, res) => {
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
      message: "User sign up successfully",
    });
  } catch (err) {
    res.send("ERROR : " + err.message);
  }
});

module.exports = authRouter;
