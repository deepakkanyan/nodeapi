
login = {};


const client = require("../config/db")
const Users = require("../models/Users")
const express = require('express');
const { request, response } = require("express");
const router = express.Router();



/*
verifyPhoneNumber
@param  phoneNumber
*/

router.post("/verifyPhoneNumber", async function(req,response) {

    var number = req.body.phoneNumber;
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
 @params {otp,phoneNumber}
*/

router.post("/verifyOTP", async function(req,response) {

    var number = req.body.phoneNumber;
    var otp = req.body.otp;

    if(number == null || otp == null){
        return response.json({'success': false,'message':'invalid phone number or OTP'})
    }

    var isAlready = await Users.findOne({ where : { 
        phonenumber : number,  otp : otp}})

     if(isAlready == null){
      return  response.json({'success': false,'message':'OTP not match'})
     }else{
     return  response.json({'success': true,'message':'OTP matched successfully', 'data':isAlready.dataValues})

     }
})



router.post("/uploadImage",function(request,response){


    console.log(request)

    response.json({"upload":request})



})



module.exports = login
module.exports = router








