var express = require('express');
var router = express.Router();
const port = 5000
const bodyParser = require('body-parser')



const app = express()  
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
const login = require('./app/login');
const db = require('./app/Db');





/*this is test comment*/
app.use("/login",login)
app.use("/loginTo",login) 



app.listen(port, () => {
  console.log(`connected to Port`);
})


// app.get('/', async (req, res) => {
    
//     // res.write('Hello World!');
//     try {
//       //  await sequelize.authenticate();
//         res.send('Connection has been established successfully.');
//     } catch (error) {
//         console.log('Unable to connect to the database:', error);
//     }
// });

 

//   app.get('/getUsers',async (request,response) => {

//       login.getUsers(request,response) 

//   })


//   app.post('/getUserID',async (request,response) => {

//     login.getUserID(request,response) 
    
//       })




// // app.get('/abc', async (req, res) => { 
// //    login.signup(req,res);
// // });



// app.post('/saveGame',async (request,response) => {

//     login.saveGame(request,response) 
    
//       })


//  app.get('/getGame', async (req, res) => { 
//         login.getGame(req,res);
//      });


//   app.post('/verifyPhone', async (req, res) => { 
//       login.verifyPhone(req,res);
//    });
     







 