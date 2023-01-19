"use strict";
const router = require("express").Router();
const Controller = require("../Controllers/Items.Controller");
const Middleware = require("../Middleware/Items.Middleware");

// Get server health
router.post("/create", Middleware.createItem, Controller.createItem);
router.get("/get/:id", Middleware.getItem, Controller.getItem);
router.get("/getAll", Controller.getItems);
router.put("/update/:id", Middleware.updateItem, Controller.updateItem);

module.exports = router;
