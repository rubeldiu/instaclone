const express = require('express');
const router= express.Router()
const mongoose = require('mongoose')
const Student = mongoose.model('Student')

router.post('/createstudent',(req,res)=>{
      const {name,address,email}= req.body;
      if(!name || !address || !email){
          return res.status(422).json({error: 'Please fill all the fields'})
      }
      const student = new Student({
          name,
          address,
          email
      });
      student.save()
             .then(student =>{
                 res.json({message: 'Saved Successfull!!'})
             })
             .catch(err =>{
                 console.log(err)
             })

})

router.get('/getall',(req,res)=>{
    Student.find()
          .then(st=>{
              res.json({st})
          })
          .catch(err=>{
              console.log(err)
          })

})

router.post('/getstudent',(req,res)=>{
    const {email}= req.body;
      Student.findOne({email:email})
             .then(student=>{
                 if(student){
                    res.json({student})
                     
                 }
                 else{
                    return res.status(422).json({error:"Student not fount"}) 
                 }
             })
             .catch(err=>{
                 console.log(err)
             })
})





module.exports= router;

