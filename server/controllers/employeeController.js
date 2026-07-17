import employee from "../models/employees.js";

const employeeController = {

    addEmployee: async (req, res) => {
        try {
            const { empName, empEmail, empAge } = req.body;

            await employee.insertOne({ employee_name: empName, employee_email: empEmail, employee_age: empAge });
            res.send({ message: "Employee Inserted Successfully" });
        }
        catch (err) {
            console.log(err);
        }

    },
    getEmployee : async (req , res) => {
        try {

             const employees = await employee.find();
             res.send({message : "data fetched successfully" , employees})
          
            
        } catch (error) {
            console.log(error)
        }
    },
    deleteEmployee : async (req , res) => {
        try {

            await employee.deleteOne({_id : req.params.id});
            res.send({message : "employee deleted successfully"})

            
        } catch (error) {

            console.log(error)
            
        }
    }
}

export default employeeController;