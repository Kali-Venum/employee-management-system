const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const messages = require("../messages.json");
const departmentService = require("../services/department.service");

const createDepartment =  catchAsync(async (req, res) => {
const addDepartment = await departmentService.createDepartment(req.body,req.user);
if (addDepartment) {
    return res.status(201).send({
      serverResponse: {
        code: httpStatus.CREATED,
        message: messages.DEPARTMENT_SUCESSFULLY_CREATED,
      },
      result: {
        data: addDepartment,
      },
    });
  }
})

module.exports ={createDepartment}