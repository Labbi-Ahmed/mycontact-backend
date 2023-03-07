const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();
const app = express();

const port = process.env.PORT || 4001;

app.use(express.json());
/// Main basic way to create a api
// app.get("/api/contacts",(req,res)=>{
//     res.status(200).json({message: "get the contacts"});
// });
/// this si create api commont for all /api/contacts and create fun /route/contactRoutes folder
app.use("/api/contacts", require("./routes/contactRoutes"));

app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`server running on the poret ${port}`);
});