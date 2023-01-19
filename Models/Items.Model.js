"use strict";
const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
  {
    uuid: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Item", ItemSchema);
