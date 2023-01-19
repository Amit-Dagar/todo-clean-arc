"use strict";
const ItemFunctions = require("../Functions/Items.Function");

// create a new item
exports.createItem = async (req, res, next) => {
  await ItemFunctions.createItem(req.body);
  res.status(201).json({ message: "Item created successfully" });
};

// get all items
exports.getItems = async (req, res, next) => {
  const items = await ItemFunctions.getItems();
  res
    .status(200)
    .json({ message: "Items fetched successfully", payload: items });
};

// get a single item
exports.getItem = async (req, res, next) => {
  const { id } = req.params;
  const item = await ItemFunctions.getItem(id);
  res
    .status(200)
    .json({ message: "Item fetched, successfully", payload: item });
};

// update a single item
exports.updateItem = async (req, res, next) => {
  const { id } = req.params;
  await ItemFunctions.updateItem({ id, ...req.body });
  res.status(200).json({ message: "Item updated successfully" });
};
