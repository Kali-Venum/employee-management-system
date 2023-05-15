const Joi = require("joi");
const { password, objectId } = require("./custom.validation");

const register = {
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().custom(password).required(),
    }),
  };

  const login = {
    body: Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().custom(password).required(),
    }),
  };


  module.exports = {register,login}