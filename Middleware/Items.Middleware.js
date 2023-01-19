"use strict";
const joi = require("joi");
const createError = require("http-errors");

exports.createItem = (req, res, next) => {
  const schema = joi.object({
    name: joi.string().required(),
    completed: joi.boolean().default(false),
  });

  const { error, value } = schema.validate(req.body);
  if (error) throw createError(400, error.details[0].message);

  next();
};

exports.getItem = (req, res, next) => {
  const schema = joi.object({
    id: joi.string().required(),
  });

  const { error, value } = schema.validate(req.params);
  if (error) throw createError(400, error.details[0].message);

  next();
};

exports.updateItem = (req, res, next) => {
  const schema = joi.object({
    id: joi.string().required(),
    name: joi.string().required(),
    completed: joi.boolean().default(false),
  });

  const { error, value } = schema.validate({ ...req.params, ...req.body });
  if (error) throw createError(400, error.details[0].message);

  next();
};
