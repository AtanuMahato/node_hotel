// console.log('server file is running');
// function add(a,b){
//     return a+b;
// }

// var add = function(a,b){
//     return a+b;
// }
// var add = (a,b)=>{return a+b;}

// var add = (a,b)=> a+b;
// var result = add(111,3);
// console.log(result);

// (function(){
//     console.log("hello");
// }())

// var fs = require('fs');
// var os = require('os');
// var users = os.userInfo();
// console.log(users);
// console.log(users.username);

// fs.appendFile('info.txt','Hi'+users.username+'\n',()=>{console.log('file is created or updated')})

// const node = require('./node');
// console.log(node.data);
// console.log(node.fun(10,20));

// var _ = require('lodash');
// var data = ["atanu","person","person",1,2,1,3,4,2,"atanu"];
// var filter = _.uniq(data);
// console.log(filter);
// console.log(_.isString("Atanu"));

// app.get('/apple',(req,res)=>{
//     res.send('you want apple')
// })
// app.get('/banana',(req,res)=>{
//     res.send('you want apple')
// })
// app.get('/idli',(req,res)=>{
//     var diff_idli={
//         name: 'rava idli',
//         size: 'large',
//         is_chatni: 'yes',
//         is_sumber: 'yes'
//     }
//     res.send(diff)
// })

const express = require("express");
const app = express();
const db = require("./db");
require('dotenv').config();

const port = process.env.PORT || 3000


const bodyParser = require("body-parser");
app.use(bodyParser.json());
const person = require("./models/person");
const menu = require("./models/menu");

app.get("/", function (req, res) {
  res.send("Hello Wellcome to my hotel");
});








const personRouter = require('./routes/personRouter');
app.use('/person',personRouter); 


const menuRouter = require('./routes/menuRouter');
app.use('/menu',menuRouter);



app.listen(port, () => {
  console.log("server is listening on port no 3000");
});



