const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const DepartmentModel = require('../models/department.model')

const createDepartment = async(reqBody,reqUser)=>{
    if(reqUser.role==='manager'){
        const createDepartment = await DepartmentModel.create(reqBody);
        if(createDepartment){
            return createDepartment
        }
        else{
            throw new ApiError(
                httpStatus.BAD_REQUEST,
                messages.SOMETHING_WENT_WRONG
              );  
        }
    }   
    else{
        throw new ApiError(
            httpStatus.BAD_REQUEST,
            messages.UNAUTHORIZED_USER
          );  
    } 

}

module.exports = {createDepartment}