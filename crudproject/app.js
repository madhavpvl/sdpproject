const express =require('express')
const mongoose =require('mongoose')
const url="mongodb://localhost/sec01"
const app = express()
mongoose.connect(url);
const con =mongoose.connection;
con.on('open',()=>{
    console.log('Connected...')
})
app.use(express.json())
const studentRouter=require("./routes/students")
app.use("/students",studentRouter);
app.listen(9000,()=>{
    console.log("Server started..")
})