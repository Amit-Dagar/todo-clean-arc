"use strict";
// import express and other dependencies
const express = require("express");
const app = express();
const { catchAsync, errorHandler } = require("./Helpers/ExpressHelper");

// dotenv is a zero-dependency module that loads environment variables from a .env file into process.env
require("dotenv").config();

// initialize mongodb
require("./Helpers/InitMongoDB");

// cors
const cors = require("cors");
app.use(cors());

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/v1/", catchAsync(require("./Routes")));

// error handler
app.use(errorHandler);

// listen to port
app.listen(process.env.PORT, () => {
  console.log("----------------------------------------");
  // if DEBUG is on, then console.log will be on otherwise it will be off
  if (process.env.DEBUG === "on") {
    console.log(`🤖 Development mode is on.`);
  } else {
    console.log(`🔥 Production mode is on.`);
    console.log = function () {};
  }
  console.log(`🚀 Express server connected on: ${process.env.PORT}`);
});
