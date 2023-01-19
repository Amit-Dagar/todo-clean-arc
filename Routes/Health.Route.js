"use strict";
const router = require("express").Router();
const Controller = require("../Controllers/Health.Controller");

// Get server health
router.get("/", Controller.getHealth);

module.exports = router;
