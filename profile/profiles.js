profile = {}


const client = require("../config/db")
const express = require('express');
const { request, response } = require("express");
const router = express.Router();
const Users = require("../models/Users")

const myResponse = require("../config/MyResponse")

const { Op } = require("sequelize");

const multer = require("multer")

const storage = multer.diskStorage({
  destination : function(req,file,cb){
  cb(null,'./uploads/')
    },

    filename : function(req,file,cb){

        cb(null, new Date().toISOString()+file.originalname)
        
    }
})
const uploads = multer({storage : storage})



/*
phoneNumber,
*/ 
router.post("/updateProfile" ,uploads.single("image"), async function(request,response) {

    console.log(request.body)
    var phone = request.body.phonenumber
    var userInfo = await Users.findOne({ where : { phonenumber : phone, isverified : true} })

    if(userInfo == null){
       return response.json({'success':false,'message':'Not valid user'})
    }

    var body = request.body
    //console.log(body)
    //console.log(request.file.path)
    var userUpdate = await Users.update({
        username : body.username,
       // profilepicture : request.file?.path,
        email :  body.email,
        height : body.height,
        fname : body.fname,
        fnumber : body.fnumber,
        fwork: body.fwork,
        work : body.work,
        got : body.got,
        dob : body.dob,
        mgot : body.mgot}, { where : { phonenumber : phone} })

     //  

      var user = await Users.findOne({where : {phonenumber:phone}})
      return response.json({'success': true,'user':user.dataValues})  


})



/*
phoneNumber,
*/ 
router.post("/saveProfile" , async function(request,response) {

    
    var phone = request.body.phonenumber
    var userInfo = await Users.findOne({ where : { phonenumber : phone, isverified : true} })

    if(userInfo == null){
       return response.json({'success':false,'message':'Not valid user'})
    }

    var body = request.body
    //console.log(body)
    //console.log(request.file.path)
    var userUpdate = await Users.update({
        username : body.username,
        email    :  body.email,
        height   : body.height,
        dob      : body.dob,
        got      : body.got,
        education : body.education,
        work     : body.work,
        fname    :  body.fname,
        fnumber  : body.fnumber,
        fwork    : body.fwork,
       
        mgot     : body.mgot, 
       
        village  : body.village,
        district : body.district
    
    }, { where : { phonenumber : phone, } })

     //  

      var user = await Users.findOne({where : {phonenumber:phone}})
      return response.json({'success': true,'user':user.dataValues})  


})



/*get single profile info*/
router.get("/profileInfo", async function(request,response){

    var phone = request.body.phoneNumber
     
    var userInfo = await Users.findOne({ where : { phonenumber : number, isVerified : true} })
    return myResponse.response(true,'done',userInfo.dataValues)


})



/*
Get all users list by pagination
*/
router.post("/getUsers",async function(request,response){

    var totalRecord = 8
    var offset = request.body.page * totalRecord 


    var users = await Users.findAll({
        limit : totalRecord, 
        offset : offset - totalRecord ,
         where : {username : { 
            [Op.ne] : null

         }}
    })

     if(users.length == 0){
        return response.json({'Success':false,'message':' no data found.' })

     }   else{
        return response.json({'Success':true,'message':'Data found','users': users })

     }

   

})


module.exports = profile
module.exports = router