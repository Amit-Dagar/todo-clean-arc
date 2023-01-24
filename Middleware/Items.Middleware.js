"use strict";
const joi = require("joi");
const expressHelper = require("../Helpers/ExpressHelper");

exports.createItem = (req, res, next) => {
  const schema = joi.object({
    name: joi.string().required(),
    completed: joi.boolean().default(false),
  });

  expressHelper.handleReqBody(req, schema, next);
};

exports.getItem = (req, res, next) => {
  const schema = joi.object({
    id: joi.string().required(),
  });

  expressHelper.handleReqParams(req, schema, next);
};

exports.updateItem = (req, res, next) => {
  const schema = joi.object({
    id: joi.string().required(),
    name: joi.string().required(),
    completed: joi.boolean().default(false),
  });

  expressHelper.handleReqParamsAndBody(req, schema, next);
};
