const express = require('express');
require('dotenv').config(); // To access the environment variables

const connectDB = require('./config/dbconfig');
const userRouter = require('./routes/userRoute');

const app = express();
app.use(express.json());
connectDB();


/** Routes */
app.use('/api/users', userRouter);




app.listen(8082, ()=>{
    console.log('Server is running on port 8082')
})