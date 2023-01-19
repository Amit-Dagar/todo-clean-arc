"use strict";
const { getIp } = require("../Helpers/Tools");

exports.getHealth = (req, res, next) => {
  res.status(200).json({
    message: "🚀 Server is up and running.",
    ip: getIp(req),
  });
};
