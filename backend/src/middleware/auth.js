const jwt = require("jsonwebtoken");
const User = require("../models/user");
const authRouter = require("../routes/auth");
const userAuth = async (req, res, next) => {
  try {
    const cookies = req.cookies;
    const { token } = cookies;

    if (!token) {
      return res.status(401).json({
        message: "cookie does not contain token",
      });
    }

    const isTokenVerified = await jwt.verify(
      token,
      process.env.SERVER_SECRET_CODE
    );
    if (!isTokenVerified) {
      return res.status(401).json({
        message: "token is  invalid",
      });
    }

    const { _id } = isTokenVerified;

    const user = await User.findById(_id);
    if (!user) {
      return res.status(400).json({
        message: "user not exist",
      });
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = userAuth;
