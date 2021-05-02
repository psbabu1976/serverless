let express = require('express');
let serverless = require('serverless-http');
let path = require('path');

const { Router } = require('express');


let app = express();
let router = express.Router();

router.get("/", (req,res)=>{
    res.send({msg:"Hi"});
})

app.use('/.netlify/functions/app', router);
// app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

console.log(__dirname);


// app.listen(5000, ()=>console.log('Running on 5000...'));

module.exports = app;
module.exports.handler = serverless(app);