var express = require('express');
var router = express.Router();

const bodyParser = require('body-parser')
 


const app = express()  
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
const login = require('./app/login');
const db = require('./app/Db');





/*this is test comment*/
app.use("/login",login)  






app.listen( (process.env.port || 5000) , () => {
  console.log(`connected to Port`);
})



 