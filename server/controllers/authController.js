import employee from "../models/employees.js";

const authController = {

    login: async (req, res) => {
        try {

            const registeredEmployee = await employee.findOne({
                employee_email : req.body.email,
                employee_password : req.body.password  
            });
            if(registeredEmployee){
                res.send({message : "Login Successfully"});
            }
            else {
                res.send({message : "Invalid Credentials"});
            }

        } catch (error) {

            console.log(error)

        }
    }

}

export default authController;