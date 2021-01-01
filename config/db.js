

const database = "d3es4eolrbqul8";
const username = "fcsyomjwcigpup";
const password = "e35e580c2bf0daaa1a9a7bd785fd3a6ae602bb205d510b08c6fa7d6cdbcc5e69";
const host = "ec2-54-75-244-161.eu-west-1.compute.amazonaws.com";
const port = 5432;
 


const { Sequelize } = require('sequelize');

//const { Client, Pool } = require('pg'); 
//const databaseUrl = "postgres://fcsyomjwcigpup:e35e580c2bf0daaa1a9a7bd785fd3a6ae602bb205d510b08c6fa7d6cdbcc5e69@ec2-54-75-244-161.eu-west-1.compute.amazonaws.com:5432/d3es4eolrbqul8"

// const client = new Client({
//     connectionString: databaseUrl,
//     ssl: { rejectUnauthorized: false }
//   });

 //client.connect();

 const sequelize = new Sequelize({
  database: database,
  username: username,
  password: password,
  host: host,
  port: port, 
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // <<<<<<< YOU NEED THIS
    }
  },
});


sequelize.authenticate().then(()=> console.log("Database connected")).catch(console.error())


 

 module.exports = sequelize

