let express = require('express');
let serverless = require('serverless-http');
const { Router } = require('express');


let app = express();
let router = express.Router();

router.get("/", (req,res)=>{
    res.json({msg:"Hi"});
})

app.use('/.netlify/functions/app', router);
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

app.listen(5000, ()=>console.log('Running on 5000...'));

module.exports = app;
module.exports.handler = serverless(app);