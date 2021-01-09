var express = require('express');
var router = express.Router();

const bodyParser = require('body-parser')
 


const app = express()  
app.use(bodyParser.json()) 
app.use(bodyParser.raw());
app.use('/uploads',express.static('uploads'))
app.use(bodyParser.urlencoded({extended: true}))

const db      = require('./app/Db');
const login   = require('./app/login');
const profile = require('./profile/profiles');






/*this is test comment*/
app.use("/login",login) 

app.use("/profiles",profile)  







app.listen( (process.env.PORT || 5000) , () => {
  console.log(`connected to Port`);
})



 