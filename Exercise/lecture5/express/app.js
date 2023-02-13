// 6213166
var express = require('express')
var routing= express()
var crypto=require('crypto')
var fs=require('fs')


routing.get('/',function(req,res){
    res.send('<h1>hello world</h1?')
})

routing.get('/profile/:id',function(req,res){
   
    var jsondata = require('./users.json')
    var input = req.params.id
  

    
    const userdata = jsondata.users.filter(data => 
        data.id == input
    )[0]

   const username = userdata.username
   const fullname = userdata.fullname
   const id = userdata.id
   const encryptpass =  crypto.createHash('sha1').update(userdata.password).digest('hex')

   res.send(`<p>id : ${id}</p><p>name : ${username}</p><p>password : ${encryptpass}</p><p>fullname : ${fullname}</p>`)
})

routing.listen(8081)