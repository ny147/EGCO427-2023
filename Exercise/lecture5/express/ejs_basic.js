//-----app.js-----//

//npm install express --save
//npm install ejs
var express = require('express')
var app = express()

app.set('view engine','ejs') //Set View folder
app.get('/:name',function(req,res){
    var data = {
        user: "bob",
        job : "student"
    }
    res.render('profile', {person : req.params.name , data:data})
})

app.listen(8081)