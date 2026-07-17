import mongoose from 'mongoose'

const employeesSchema = new mongoose.Schema({
    employee_name : {
        type: "String",
        required : true
    },
    employee_email : {
        type: "String",
        required : true
    },
    employee_age : {
        type: "Number",
        required : true
    },
    employee_password : {
        type: "String",
        required : true,
        default : "123"
    }
});

const employee = mongoose.model("Employee", employeesSchema);
export default employee;

