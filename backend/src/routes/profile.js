const express = require("express");

const profileRouter = express.Router();
const userAuth = require("../middleware/auth");
const {validEditableFields} = require("../utils/validation");

/**Get User Profile API */
profileRouter.get("/api/users/view/profile", userAuth, async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(400).json({
        message: "user not exist",
      });
    }
    res.send(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

/**Update User Profile API */
profileRouter.patch("/api/users/edit/profile", userAuth, async (req, res) => {
  try {
    if (!validEditableFields(req)) {
      throw new Error("Invalid Edit Request!!");
    }
    const loggedInUser = req.user;

    Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]));
    await loggedInUser.save();
    res.json({
      message: `${loggedInUser.firstName} your profile updated successfully.` ,data: loggedInUser,
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = profileRouter;
