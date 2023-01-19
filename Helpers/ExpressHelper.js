"use strict";

// catchAsync: to get rid of try catch block for controllers
exports.catchAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};

// errorHandler: handle errors of entire application
exports.errorHandler = (err, req, res, next) => {
  console.log("🔴 Error: ", err);
  res.status(500).send({ error: err.message });
};
