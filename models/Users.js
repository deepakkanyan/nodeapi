
const Sequelize = require('sequelize');
const db = require('../config/db');


var Users =  db.define('users', {
    
    username : {type :Sequelize.STRING}, 
    email : {type :Sequelize.STRING},
    phonenumber : {type :Sequelize.STRING},
    otp : {type :Sequelize.STRING},
    work:  {type :Sequelize.STRING},
    fname:  {type :Sequelize.STRING},
    fwork:  {type :Sequelize.STRING},
   fnumber:  {type :Sequelize.STRING},
    got:  {type :Sequelize.STRING},
   mgot:  {type :Sequelize.STRING},
   height:  {type :Sequelize.STRING},
   dob:  {type :Sequelize.DATE},
   isverified:  {type :Sequelize.BOOLEAN},
   profilepicture :  {type :Sequelize.STRING},
   village :  {type :Sequelize.STRING},
   district :  {type :Sequelize.STRING},
   education :  {type :Sequelize.STRING}
  })

    
module.exports = Users
 





