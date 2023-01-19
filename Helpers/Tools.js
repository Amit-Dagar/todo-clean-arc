const { v4: uuidv4 } = require("uuid");

exports.getIp = function (req) {
  return req.headers["x-forwarded-for"] || req.connection.remoteAddress;
};

exports.getUUID = function () {
  return uuidv4();
};
