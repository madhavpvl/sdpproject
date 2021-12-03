const express=require('express')
const router =express.Router();
const Student=require("../models/student");
router.get("/",async(req,res)=>{
    try{
        const student=await Student.find();
        res.json(students);

    }catch(err){
        res.send("Error"+err);
    }
})
router.post("/",async(req,res)=>{
    const student =new Student({
        username:req.body.username,
        Email:req.body.Email,
        password:req.body.password
    })
    try{
        const st1 =await student.save()
        res.json(st1);
    }
    catch(err){
        res.send("Error"+err);1
    }
})
router.patch("/",async(req,res)=>{
    try{
        const st =await Student.findById(req.paramsms.id);
        st.Email =req.body.Email
        const s1=await st.save();
        res.json(s1);
    }catch(err){
        res.send("Error"+err);
    }})
    router.delete("/:id",async(req,res)=>{
        try{
            const st=await Student.findById(req.params.id)
            const a1=await st.delete();
            res.json(a1);
        }catch(err){
            res.send("Error"+err);
        }
    })
    module.exports=router;