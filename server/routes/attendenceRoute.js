import express from 'express';

const attendanceRoute = express.Router();

attendanceRoute.get("/addemployee", employeeController.addEmployee);

export default attendanceRoute;