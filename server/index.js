import express from 'express';
import dotenv from 'dotenv'
import exampleRoute from './routes/exampleRoute.js';
import cors from 'cors'
import employeeRoute from './routes/employeeRoute.js';
import dbConnect from './config/db_connection.js';
import authRoute from './routes/authRoute.js';

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

dbConnect();


app.use(exampleRoute);
app.use(employeeRoute);
app.use(authRoute)


app.listen(process.env.PORT, () => {
    console.log("Server Started");
})