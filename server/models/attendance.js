import mongoose from "mongoose"

const attendanceSchema = new mongoose.Schema({
    employee_name: {
        type: "String",
        required : true,
    }, 
    Check_In: {
        type: "String",
        required : true,
        match : /^([01]\d|2[0-3]):([0-5]\d)$/  
    },
     Check_Out: {
        type: "String",
        required : true,
        match : /^([01]\d|2[0-3]):([0-5]\d)$/  
    },
});


const  attendance = mongoose.model("attendance" , attendanceSchema);
export default attendance;