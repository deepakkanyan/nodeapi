
login = {};


const client = require("../config/db")
const msg = require("../config/MyResponse")


const Users = require("../models/Users")

const express = require('express'); 

const router = express.Router();
const multer = require("multer"); 

const storage = multer.diskStorage({  
    destination : function(req,file,cb){  cb(null,'./uploads/')
    },
     filename : function(req,file,cb){ cb(null, new Date().toISOString()+file.originalname)
 }
})
const uploads = multer({storage : storage})



/*
verifyPhoneNumber
@param  phonenumber
*/

router.post("/verifyPhoneNumber", async function(req,response) {

    var number = req.body.phonenumber;
    if(number==null){

        return response.json({'success': false,'message':'invalid phone number'})
    } 

    var otp = Math.floor(1000 + Math.random() * 9000);


    var userInfo = await Users.findOne({ where : { phonenumber : number} })
      
     if(userInfo == null){

     var isInserted =  await Users.create({  phonenumber : number, otp: otp })
     return  response.json({'success' : true, 'message':`Otp ${otp} has been sent to ${number}`,
                'newUser':true})
     }else{

      var isUpdated =  await Users.update({otp: otp}, { where : { phonenumber : number} })
     
      return  response.json({'success' : true, 'message':`Otp ${otp} has been sent to ${number}`,
     'newUser':false, 'user' : userInfo.dataValues})

     }
}) 


/*
 verifyOTP
 @params {otp,phonenumber}
*/

router.post("/verifyOTP", async function(req,response) {

    var number = req.body.phonenumber;
    var otp = req.body.otp;

    if(number == null || otp == null){
        return response.json({'success': false,'message':'invalid phone number or OTP'})
    }

    var isAlready = await Users.findOne({ where : { 
        phonenumber : number,  otp : otp}})

     if(isAlready == null){

      return  response.json({'success': false,'message':'OTP not match'})
     }else{
     await Users.update({isverified: true}, { where : { phonenumber : number} })
     isAlready.dataValues.isverified = true
     return  response.json({'success': true,'message':'OTP matched successfully', 'data': isAlready.dataValues })

     }
})




 


module.exports = login
module.exports = router








