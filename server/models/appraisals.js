import mongoose from 'mongoose'

const appraisalsSchema = new mongoose.Schema({
    employee_name : {
        type: "String",
        required : true
    },
    employee_achievements : {
        type : "String",
        required : true
    }
});

const appraisal = mongoose.model("Appraisal", appraisalsSchema);
export default appraisal;

