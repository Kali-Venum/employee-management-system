const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const messages = require("../messages.json");
const tokenService = require("../services/token.service");
const authService = require("../services/auth.service");

const register = catchAsync(async (req, res) => {
    const user = await authService.registerUser(req.body);
    const tokens = await tokenService.generateAuthTokens(user);
    if (user) {
      return res.status(201).send({
        serverResponse: {
          code: httpStatus.CREATED,
          message: messages.USER_REGISTRATION_SUCCESSFUL,
        },
        result: {
            data: user,
          tokens: {
            accessToken: tokens.access.token,
            refreshToken: tokens.refresh.token,
          },
        },
      });
    }
  });

  const login = catchAsync(async (req, res) => {
    const user = await authService.login(req.body);
  
    if (user) {
      const tokens = await tokenService.generateAuthTokens(user);
  
      return res.status(200).send({
        serverResponse: {
          code: 200,
          message: messages.USER_LOGIN_SUCESSFUL,
        },
        result: {
          data: user,
          tokens: {
            accessToken: tokens.access.token,
            refreshToken: tokens.refresh.token,
          },
        },
      });
    }
  });

  module.exports = {register,login}