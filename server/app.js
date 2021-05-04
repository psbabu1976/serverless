let express = require('express');
let serverless = require('serverless-http');
let path = require('path');
let webpush = require('web-push');
const {
    Router
} = require('express');


let app = express();
let router = express.Router();
let vapidKeys = {
    publicKey: 'BDUpXczccyKiRuPOq1L3QjEmMHVQB9wpUcqYVZjIDyzeZrDcHU-XjMEf-gbJs1KzUz7gvIRCJpj_q7zwiVzW50Y',
    privateKey: 'QwNuN5NqiBU0JfwiXjfxDdX4IaY7Z9r1X8Ug99nMmas'
}
console.log(vapidKeys);
webpush.setVapidDetails(
    'mailto:psbabu1976@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);
const body = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/dbMjFeocsyA:APA91bG2jc00DqL4Ph7dUeWgyBzMN6FL0jsf63vEQj1Myp4IAHzq7tuE6eIX1pjjUzRe5wA8cLNKghYhc55plmqK-F66CT_R_xya4ydJ_SRe1vRFcxZA4oxYrGWCs_HbRBdtnAZmSgpT",
    "expirationTime": null,
    "keys": {
        "p256dh": "BOg0yoCd7ZmsKK9e4-5ab0ybP0Su-mwEFuiZd4KnHQNkx4yvd_bwIt2Yy-CLr3iwYnbd9EMEJbsI7t7wxBtwBTc",
        "auth": "Hn0SMRmfi1onp4WxkDHdqA"
    }
}
// headers:{
//     method:'post',
//     'content-type': 'application/json'
// }
//app.use(express.static(__dirname));
const payload = JSON.stringify({
    msg: 'Hi how are you??'
});
app.post("/subscribe", (req, res) => {
    console.log('Got a hit', req.url, req.body);
    const payload = JSON.stringify({
        msg: 'Hi how are you??'
    });
    //console.log(req.body)

    webpush.sendNotification(body, "hello world")
        .catch(err => console.log(err));
    //res.send(req.body)

})
router.get("/hello", (req, res) => {
    res.json({
        statusCode: 200,
        body: ({
            message: `Hello world ${Math.floor(Math.random() * 10)}`
        })
    });
})


//app.use(express.static(__dirname));
app.get("/", (req, res) => res.sendFile(process.cwd() + '/index.html'))
app.use('/.netlify/functions/app', router);


console.log(process.cwd());


app.listen(5000, () => console.log('Running on 5000...'));

// module.exports = app;
 module.exports.handler = serverless(app);