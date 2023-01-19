"use strict";
const ItemSchema = require("../Models/Items.Model");
const { getUUID } = require("../Helpers/Tools");

// create a new item
exports.createItem = async ({ name }) => {
  const item = new ItemSchema({ uuid: getUUID(), name });
  return await item.save();
};

// get all items
exports.getItems = async () => {
  return await ItemSchema.find();
};

// get a single item
exports.getItem = async (id) => {
  return await ItemSchema.findOne({
    uuid: id,
  });
};

// update a single item
exports.updateItem = async ({ id, name, completed }) => {
  return await ItemSchema.updateOne(
    { uuid: id },
    {
      name,
      completed,
    }
  );
};
