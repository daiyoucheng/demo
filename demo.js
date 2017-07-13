/**
 * Created by Administrator on 2017/7/14.
 */
var http = require("http");
var fs = require("fs");
http.createServer(function (res,req) {
    if(res.url == "/favicon.ico") return;
    console.log(res.url);
    if(res.url == "/"){
        fs.readFile("index.html",function (err,data) {
            req.writeHead("200",{"Content-Type":"utf-8"});
            req.write(data.toString())
            req.end();
        })
    }else if(res.url == "/css/set.css"){
        fs.readFile("./css/set.css",function (err,data) {
          //  req.writeHead("200",{"Content-Type":"utf-8"});
            req.write(data.toString())
            req.end();
        })
    }else if(res.url == "/image/1.jpg"){
        //fs.readFile(__dirname +"/image/1.jpg",function (err,data) {
        fs.readFile("./image/1.jpg",function (err,data) {
          //  req.writeHead("200",{"Content-Type":"utf-8"});
            req.write(data)
            req.end();
        })
    }

}).listen(8888)
