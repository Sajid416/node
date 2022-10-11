const express=require('express');
const Router=express.Router();
const homeSchema=require("../models/homeSchema")
Router.get('/',(err,res)=>{
    res.render('Registration',{title:'Fill Form',password:'',email:''}); 
 })

 Router.post('/Registration',async(req,res)=>{

    try{

        const {
            email,
            password,
            repassword,
            phn,
            fname,
            lname,
            gender,
            country
                         
         } = req.body;

      if(password===repassword){
        const userData =new homeSchema({
            email,
            password,
            phn,
            fname,
            lname,
            gender,
            country
        })
        userData.save(err=>{
            if(err){
              console.log("error");
            }
            else{
              
                // res.render('Registration',{title:'Registration done',password:'',email:''});
                res.render('Login_page'); 
            }
        })

        const useremail=await homeSchema.findOne({email:email});
       if(email===useremail.email){
        res.render('Registration',{title:'',password:'',email:'Email is already exist'});

       }
       else{
        console.log('error');
       }
      }
      else{
        res.render('Registration',{title:'',password:'password not matching',email:''}); 
      }

    }catch(error){
      res.render('Registration',{title:'Error in code',password:'',email:''});
    }

 })

Router.post('/login',(req,res)=>{
  const {
    email,
    password
  } =req.body;

  homeSchema.findOne({email:email,password:password},(err,result)=>{
   
    if(email===result.email && password===result.password){
      res.render('/farmer');

    }
    else{
      console.log(err);
    }
  })
})
 module.exports=Router;
 