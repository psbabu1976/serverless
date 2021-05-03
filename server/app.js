let express = require('express');
let serverless = require('serverless-http');
let path = require('path');

const { Router } = require('express');


let app = express();
let router = express.Router();

router.get("/hello", (req,res)=>{
    res.json({
        statusCode: 200,
        body: JSON.stringify({
          message: `Hello world ${Math.floor(Math.random() * 10)}`
        })
      });
})
// app.use(express.static(__dirname + './'));
router.get("/", (req,res)=>res.sendFile(process.cwd()+ '/index.html'))
app.use('/.netlify/functions/app', router);


console.log(__dirname);


//app.listen(5000, ()=>console.log('Running on 5000...'));

//module.exports = app;
module.exports.handler = serverless(app);