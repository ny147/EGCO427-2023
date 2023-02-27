
const {MongoClient, Collection} = require('mongodb')
const express = require('express')
const jwt = require('jsonwebtoken')
var app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))

const url = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(url)


const dbName = 'egco427'
// let OurToken;
let db;
let collection;
let collectionstudent;

async function dbConnect(){
    await client.connect();
    console.log("Database connection successfully");
    
    db = client.db(dbName)
    collection = db.collection('login');
    collectionstudent = db.collection('students');
}

async function findUser(User){
    var query = {username : User.username,password : User.password}
    const findResult = await collection.find(query).count()
    if (findResult > 0)
        return true
    else 
        return false
    
}

async function showStudent(){
    const findResult = await collectionstudent.find({}).toArray();
    return findResult;
}

dbConnect().catch(console.error)


app.get('/api',function(req,res){
    res.json({
        description: "API without authentication" 
    })
})

app.get('/api/protected', ensureToken, (req, res) => {
  jwt.verify(req.token, 'egci4276272', function(err, data) {
    if (err) {
      res.sendStatus(403);
    } else {
    //   res.json({
    //     description: 'Protected information. Congrats!',
    //     data: data
    //   });
    showStudent().then((result )=> {
        console.log(result)
        return res.json(result)
    })
    }
  });
})




app.post('/api/login', (req, res) => {

  // insert code here to actually authenticate, or fake it
    const Thisuser = req.body

    findUser(Thisuser ).then((result) => {
    
    if (result){
        const token = jwt.sign({ user: Thisuser.password }, 'egci4276272');
        OurToken = token;
         res.json({
         message: 'Authenticated! Use this token in the "Authorization" header',
         token: token
            });
    }else {
         res.json({
        message : 'Authenticaiton failed invalided username or password' ,
        user: {
        username: Thisuser.username,
          password: Thisuser.password
      }
            })
    }
    })
    .catch(console.error)
  
    }



)

app.get('/api/students', ensureToken, (req, res) => {
    jwt.verify(req.token, 'egci4276272', function(err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        // res.json({
        //   description: 'Protected information. Congrats!',
        //   data: data
        // });
        showStudent().then((result )=> {
            console.log(result)
            return res.json(result)
        })
      }
    });
  })




app.listen(3000,function(){
    console.log('Aplication is running on http://127.0.0.1:3000')
})

function ensureToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}