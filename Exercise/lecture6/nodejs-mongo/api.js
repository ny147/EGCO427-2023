const {MongoClient, Collection} = require('mongodb')
const express = require('express')
var app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))

const url = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(url)

const dbName = 'egco427'
let db;
let collection;

async function dbConnect(){
    await client.connect();
    console.log("Database connection successfully");
    
    db = client.db(dbName)
    collection = db.collection('students');

}

async function showMajor(findMajor){
    var query = {major : findMajor}
    const findResult = await collection.find(query).toArray();
    return findResult
}

async function showAge(findAge){
    var key = {age : -1}
    var query = {age : { $lt :  parseInt(findAge) }}
    const findResult = await collection.find(query).sort(key).toArray();
    return findResult
}

async function insertStudent(newStudent){
    var insertResult = await collection.insertOne(newStudent);
    return insertResult;
}

async function updateStudent(updateStudent){
    let query = {id : parseInt(updateStudent.id)}
    let newValue = {$set: {lastname : updateStudent.lastname}}
    const UpdateResult = await collection.updateOne(query,newValue);
    return UpdateResult;
}

async function deleteStudent(deleteStudent){

    let query = {id :  parseInt(deleteStudent)}
    const deleteResult = await collection.deleteOne(query);
    return deleteResult
}

dbConnect().catch(console.error)



var server = app.listen(8081,function(){
    const host = "127.0.0.1"
    const port = server.address().port
    console.log("Application is running at http://%s:%s",host,port)
}) 

app.get('/showmajor/:major',(req,res)=>{
    console.log("Show major :%s",req.params.major)
    showMajor(req.params.major).then((result) => {
        console.log(result)
        res.json(result)
    })
    .catch(console.error)
})

app.get('/showage/:age',(req,res)=>{
    console.log("Show age :%s",req.params.age)
    showAge(req.params.age).then((result) => {
        console.log(result)
        res.json(result)
    })
    .catch(console.error)
})

app.post('/insertstudent',(req,res) => {
    console.log("Add new student : %s",req.body)
    insertStudent(req.body).then(
        (result) => {
            console.log(result);
            res.json(result)
        }
    )
    
})

app.put('/updatestudent',(req,res) => {
    console.log("updatestudent student : %s",req.body)
    updateStudent(req.body).then(
        (result) => {
            console.log(result);
            res.json(result)
        }
    )
    
})

app.delete('/deletestudent/:id',(req,res) => {
    console.log("deletestudent student : %s",req.params.id)
    deleteStudent(req.params.id).then(
        (result) => {
            console.log(result);
            res.json(result)
        }
    )
    
})

server.on('close', function (event) {
    console.log('Server is shutdown');
    client.close()
  });
  
process.on('SIGINT', function () {
    console.log('Server is shutdown');
    client.close()
    // if you want to exit then call:
    process.exit();
  });











// async function main (){
//     await client.connect()
//     console.log("Database connection successfully");

//     const db = client.db(dbName)
//     const connection = db.collection('student_records');

   
//     return 'done'
// }

// main().then(console.log).catch(console.error).finally(() => client.close());


