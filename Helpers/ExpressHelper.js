"use strict";
const createError = require("http-errors");

// catchAsync: to get rid of try catch block for controllers
exports.catchAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};

// errorHandler: handle errors of entire application
exports.errorHandler = (err, req, res, next) => {
  console.log("🔴 Error: ", err);
  res.status(500).send({ error: err.message });
};

// handle req body
exports.handleReqBody = (req, schema, next) => {
  const { error, value } = schema.validate(req.body);
  if (error) throw createError(400, error.details[0].message);

  req.body = value;
  next();
};

// handle req params
exports.handleReqParams = (req, schema, next) => {
  const { error, value } = schema.validate(req.params);
  if (error) throw createError(400, error.details[0].message);

  req.params = value;
  next();
};

// handle req query
exports.handleReqQuery = (req, schema, next) => {
  const { error, value } = schema.validate(req.query);
  if (error) throw createError(400, error.details[0].message);

  req.query = value;
  next();
};

// handle req params and body
exports.handleReqParamsAndBody = (req, schema, next) => {
  const { error, value } = schema.validate({ ...req.params, ...req.body });
  if (error) throw createError(400, error.details[0].message);

  req.body = value;
  next();
};
