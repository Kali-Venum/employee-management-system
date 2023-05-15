const mongoose = require('mongoose');

const departmentSchema = mongoose.Schema({
    departmentName:{type:String},
    categoryName:{type:String},
    employeeID:[{type: mongoose.Schema.Types.ObjectId, ref: "User"}]
},{
    timestamps: true,
  })

module.exports = mongoose.model("Department", departmentSchema);