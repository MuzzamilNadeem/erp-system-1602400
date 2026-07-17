import express from 'express';
import employeeController from '../controllers/employeeController.js';

const employeeRoute = express.Router();

employeeRoute.post("/addemployee", employeeController.addEmployee);
employeeRoute.get("/getemployees", employeeController.getEmployee);
employeeRoute.delete("/deleteemployee/:id", employeeController.deleteEmployee);

export default employeeRoute;