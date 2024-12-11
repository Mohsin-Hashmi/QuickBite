const express = require("express");

const profileRouter = express.Router();
const userAuth = require("../middleware/auth");

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

module.exports = profileRouter;
