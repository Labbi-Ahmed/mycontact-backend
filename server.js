const express = require('express');
const errorHnader = require('./middleware/errorHandler');
const app = express();
const dotenv = require('dotenv').config();

const port = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/name",require("./routes/contactRoutes"));
app.use(errorHnader);

app.listen(port,(req,res)=>{
    console.log("This is ok",port);
})