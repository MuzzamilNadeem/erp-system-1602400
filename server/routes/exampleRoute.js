import express from 'express';
import exampleController from '../controllers/exampleController.js';

const exampleRoute = express.Router();

exampleRoute.get("/abc", exampleController.demo);

export default exampleRoute;