const express = require('express');
const app = express();

const port = 5000;

app.get("/api/name", (req, res)=>{
    res.send("my name is Labib");
});

app.post("/api/name", (req, res)=>{
    res.statu("put the name :",req.body);
});
app.listen(port,(req,res)=>{
    console.log("This is ok");
})