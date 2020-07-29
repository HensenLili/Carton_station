var express = require("express");

var path = require("path");

var bodyParser = require("body-parser");  //用来处理post请求的参数

var upload = require("./utils/upload")  //导入upload

var app = express();

// middleware：在处理下面请求之前，先进行的操作
app.use(bodyParser.json())//前端post提交的代码为json时的  
app.use(bodyParser.urlencoded({//处理前端表单post请求提交
    extended:true
}))

// 注册

//指定静态资源目录
app.use(express.static(path.join(__dirname,'public')))  


app.get("/api/login",(req,res)=>{
    console.log(req.body);
    res.send("ok")
})


//处理图片上传的请求
app.post("/upload",(req,res) =>{
    upload.upload(req,res)
})


app.listen(5500,function(){
    console.log("连接成功")
})