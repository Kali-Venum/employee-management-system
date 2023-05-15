const Joi = require("joi");
const { password, objectId } = require("./custom.validation");

const addDepartment = {
    body: Joi.object().keys({
    departmentName: Joi.string().required(),
    categoryName: Joi.string().required(),
    }),
  };

  module.exports = {addDepartment}