import { model, Schema } from "mongoose";

const userSchema = new Schema({
     name : {
        type : String ,
        required : true , 
        minLength : [3 , " Name is must be 3 character or more "] ,

     } ,
     email : {
        type : String ,
        required : [ true , "Mail must be required!"] ,
        unique : [ true , "Mail must be unique"] ,
     } ,
     password : {
        type : String ,
        required : true ,
        minLength : [8 , "Password must be 8 char" ] ,
     } ,
     dp : {
        url :{
            type : String ,
        } ,
        public_id : {
            type: String
        }

     } ,
     otp : {
        type : String ,
        maxlength : 6 
     } ,
    expireAt : {
        type : Date ,
        default : Date.now() + 5 * 60 * 1000 // 5 min expiry 
    } ,
    isVerify : {
        type : Boolean ,
        default : false
    }
    
} , { timestamps : true , versionKey : false})


export const Users = model('user' , userSchema);