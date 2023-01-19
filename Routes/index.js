"use strict";
const router = require("express").Router();
const { catchAsync } = require("../Helpers/ExpressHelper");

// Application Routes
const HealthRoutes = require("./Health.Route");
const ItemRoutes = require("./Items.Route");

// Health
router.use("/health", catchAsync(HealthRoutes));

// Items
router.use("/items", catchAsync(ItemRoutes));

module.exports = router;
