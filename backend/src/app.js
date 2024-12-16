require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/database");
const json = require("json");
const cookieparser = require("cookie-parser");
const cors = require("cors");
app.use(express.json());
app.use(cookieparser());
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend origin
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true, // Allows cookies and credential
  })
);

const authPuoter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const restaurantRouter = require("./routes/restaurants");
const menuRouter = require("./routes/menu");

app.use("/", authPuoter);
app.use("/", profileRouter);
app.use("/", restaurantRouter);
app.use("/", menuRouter);

connectDB()
  .then(() => {
    console.log("Database connected Successfully.");
    app.listen(process.env.PORT || 5000, () => {
      console.log("server is running successfully at port 4000");
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
