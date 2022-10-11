const mongoose=require('mongoose');

const schema=mongoose.Schema;
const userSchema=new schema({
     email:{
        type:String,
        required:true,
        unique:true

     },
     password:{
        type:String,
        required:true
     },
     
     phn:{
        type:Number,
        required:true
     },
     fname:{
        type:String,
        required:true
     },
     lname:{
        type:String,
        required:true
     },
     gender:{
        type:String,
        required:true
     },
     country:{
        type:String,
        required:true
     },
    
})

module.exports=mongoose.model('Registeruser',userSchema);