var express = require("express");
var app = express();

app.get('/', function(req, res){
    var obj = {};
    obj.ipaddress = req.headers['x-forwarded-for'];
    obj.language = req.headers['accept-language'].split(',')[0];
    var str = req.headers['user-agent'];
    if (/\(([^\)]+)\)/.exec(str)[1]) {
        obj.software = /\(([^\)]+)\)/.exec(str)[1];
    } else {
        obj.software = 'not found';
    }
    res.send(obj);
});

app.listen(8080, function(){
    console.log("Example app listening on port 8080.");
});