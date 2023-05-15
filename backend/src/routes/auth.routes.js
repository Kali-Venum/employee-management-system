const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate");
const authController = require('../controllers/auth.controller')
const authValidation = require('../validations/auth.validations')

router.post('/register',validate(authValidation.register),authController.register)

router.post('/login',validate(authValidation.login),authController.login)


module.exports = router;
