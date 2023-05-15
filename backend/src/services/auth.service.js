const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const bcrypt = require("bcryptjs");
const UserModel = require("../models/user.model");
const messages = require('../messages.json')

const registerUser = async (reqBody) => {
    const findUser = await UserModel.findOne({ email: reqBody.email });
    if (findUser) {
      throw new ApiError(httpStatus.BAD_REQUEST, messages.USER_ALREADY_EXISTS);
    } else {
      const hashPassword = await bcrypt.hash(reqBody.password, 10);
      let newUser = new UserModel({
        name: reqBody.name,
        email: reqBody.email,
        password: hashPassword,
        role: reqBody.role?reqBody.role:'employee',
      });
  
      newUser = await newUser.save();
      
      if (newUser) {
        return newUser;
        
      } else {
        throw new ApiError(
          httpStatus.BAD_REQUEST,
          messages.USER_REGISTRATION_FAILED
        );
      }
    }
  };

  const login = async (reqBody) => {
    const user = await UserModel.findOne({
      email: reqBody.email,
      isEnabled: true,
    });
  
    if (!user) {
      throw new ApiError(httpStatus.BAD_REQUEST, messages.EMAIL_NOT_REGISTERED);
    } else {
      const checkedPassword = await bcrypt.compare(
        reqBody.password,
        user.password
      );
      if (checkedPassword) {
        return user;
      } else {
        throw new ApiError(
          httpStatus.BAD_REQUEST,
          messages.INVALID_EMAIL_AND_PASSWORD
        );
      }
    }
  };

  module.exports = {registerUser,login}