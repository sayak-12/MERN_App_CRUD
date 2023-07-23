// Import Libraries
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Initiate Express
const app = express();

// Require Dotenv
require("dotenv").config();

// Connecting to Database
mongoose
  .connect(process.env.dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) =>
    app.listen(process.env.PORT || 3000, () => {
      console.log("Connection to the Database was successful!");
    })
  )
  .catch((err) => console.log(err));

// Middlewares
app.use(express.json()); // Sending JSON Data
app.use(express.urlencoded({ extended: true })); // Express URL Parser

// CORS Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Routes
const appRoutes = require("./routes/routes");
app.use(appRoutes);

// Default Error Response
app.use((req, res) => {
  res.status(404).json({
    status: "404",
    msg: "The page you requested wasn't found :/",
  });
});
