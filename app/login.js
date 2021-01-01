
login = {};


const client = require("../config/db")
const Users = require("../models/Users")
//const fin = use.User();
const express = require('express');  
const router = express.Router();



router.post("/hello",function(req,response)  {


     Users.findAll()
     .then((user) =>response.send(user))
     .catch((error)=> console.log(console.error()));

})


router.post("/didIt",function(req,response)  {


    Users.findAll()
    .then((user) =>response.send(user))
    .catch((error)=> console.log(console.error()));

})

router.post("/didItagain",function(req,response)  {


    Users.findAll()
    .then((user) =>response.send(user))
    .catch((error)=> console.log(console.error()));

})

router.post("/didItagain2",function(req,response)  {


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




// /* Verify phone number */

// login.verifyPhone = async (request, response)=>{

// const {phoneNumber} = request.query


// client.query(`SELECT COUNT(*) from users WHERE phonenumber = '${phoneNumber}'`,(error, results) => {

//     var otp = Math.floor(1000 + Math.random() * 9000);
//     console.log(`count Result ${results}`)
//     if(results.rows?.length > 0){

//         client.query(`UPDATE users SET otp = '${otp}' WHERE phonenumber = '${phoneNumber}'`, (error,results) => {
  
//             console.log(`update Result ${results}`)
//              if(error){ 
//                  throw error
//              }

//              if(results.rowCount>0){

//                 response.send("send otp successfully")

//              }else{
//                 response.send("otp not done successfully")
                 
//              }




//         })




//     }else{

       
//          var query = `INSERT INTO users(phonenumber,otp) VALUES ('${phonenumber}','${otp}')` 

//         client.query(query, (error, results) => {
    
//             console.log(`insert Result ${results}`)
    
//             console.log(results)
//             if(error){
//                 throw error
//             }
    
    
//            if(results.rowCount > 0){
    
//              response.send("Successful inserted")
//             }else{
//                 response.send("Failed")
//             }  
//         })

//     }
// })}





// login.getUsers = async (request, response) => {

//     client.query('SELECT * FROM users', (error, results) => {
//         if (error) {
//           throw error
//         }
//         client.end()
//         response.status(200).json(results.rows)
//       }) 


// }    


// login.getUserID = async (request, response) => {

//     const { userID, isActive } = request.query
    
//     client.query('SELECT * FROM users Where userid = '+userID, (error, results) => {

//         response.send(response.status(200).json(results.rows))
//     }) 


// }



// login.getGame = async (request, response) => {

//     const { email } = request.query
    
    
    
//     client.query("SELECT * FROM users WHERE email = '"+email+"'", (error, results) => {

//          console.log(error,results)
       
//         if(results?.rows == null || results?.rows.length == 0 ){
//             response.send("No Data found")
//         }else{
//             response.send(JSON.stringify(results.rows))
//         }
        
        
       
//     }) 

    



// }






// login.saveGame = async (request, response) => {
// const {email,game} = request.query
// const qu = "INSERT INTO sports (email,game) VALUES ('"+email+"','"+game+"')";
// console.log(qu)
// client.query( qu, (error,results) => {

//     console.log(error,results)
//      response.send(error)
//      client.end()

// })




// }





