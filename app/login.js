
login = {};


const client = require("../config/db")
const Users = require("../models/Users")
const Op = client.Op;
const express = require('express');  
const router = express.Router();




/*
verifyPhoneNumber
@param  phonenumber
*/

router.post("/verifyPhoneNumber", async function(req,response) {

     

    var number = req.query.phonenumber;
    var otp = Math.floor(1000 + Math.random() * 9999);

    if(number == null){response.send(null)}

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

    var number = req.query.phonenumber;
    var otp = req.query.otp;

    if(number == null || otp == null){response.send(null)}

    var isAlready = await Users.findOne({ where : { 
        phonenumber : number, 
        otp : {
            [Op.or]: [otp]
          }
    
    } })

    console.log(isAlready)

     if(isAlready == null){
      return  response.send(`{"success": 'false'}`)
     }else{
     return  response.send(isAlready)

     }
})




router.post("/didIt",function(req,response)  {


    Users.findAll()
    .then((user) =>response.send(user))
    .catch((error)=> console.log(console.error()));

})


router.post("/save",function(req,response)  {


    Users.create({
         phonenumber : req.query.phonenumber,
         email : req.query.email,
        })
    .then((done) => { response.send("Sucess")})
    .catch((error) => console.log(error))
     

})


router.delete("/deleteUser",function(req,response){

    Users.destroy({
        where : { phonenumber : req.query.phonenumber} 
        
    }).then((done)=>{

        response.send("Deleted")
    })


})


router.put("/updateUser",function(request,response){

   
    Users.update(
        
        {email : request.query.email},
        { where : { phonenumber : request.query.phonenumber} }, 


    ).then((done)=>{
        response.send("Updated")
    })

    


})


module.exports = login
module.exports = router








