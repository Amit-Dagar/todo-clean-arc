"use strict";
const router = require("express").Router();

// Application Routes
const HealthRoutes = require("./Health.Route");
const ItemRoutes = require("./Items.Route");

// Health
router.use("/health", HealthRoutes);

// Items
router.use("/items", ItemRoutes);

module.exports = router;
