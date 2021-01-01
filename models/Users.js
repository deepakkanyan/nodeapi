
const Sequelize = require('sequelize');
const db = require('../config/db');


var Users =  db.define('users', {
    
    username : {type :Sequelize.STRING}, 
    email : {type :Sequelize.STRING},
    phonenumber : {type :Sequelize.STRING},
    otp : {type :Sequelize.STRING}
  })

    
module.exports = Users
 





