const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate");
const departmentController = require('../controllers/department.controller');
const departmentValidation = require('../validations/department.validations')
const auth = require("../middlewares/auth");

router.post('/create',auth(),validate(departmentValidation.addDepartment),departmentController.createDepartment)

module.exports = router;