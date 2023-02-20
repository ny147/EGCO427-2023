const {MongoClient} = require('mongodb')


// import { MongoClient } from 'mongodb'

const url = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(url)

const dbName = 'ProductDB'

async function main (){
    await client.connect()
    console.log("Database connection successfully");

    const db = client.db(dbName)
    const connection = db.collection('student_records');

    // // insert data
    // var obj = [
    //     { name: "Bob", courseid: "egci111", coursename: "computer programming", mark: 80 },
    //     { name: "Tom", courseid: "egci111", coursename: "computer programming", mark: 50 },
    //     { name: "Sue", courseid: "egci427", coursename: "Web programming", mark: 90 },
    //     { name: "John", courseid: "egci427", coursename: "Web programming", mark: 70 },
    //     { name: "Jame", courseid: "egci472", coursename: "Web programming", mark: 60 },
    // ]
    
    // const insertResult = await connection.insertMany(obj);
    // console.log("insert new data",insertResult)

    //  1) Find who take "Computer Programming"
    // var query = {coursename : /Computer programming$/i}
    // const findResult1 = await connection.find(query).toArray();
    // console.log('Found documents =>',findResult1)

    // 2) Find who have mark >60
    // var query = {mark : { $gt : 60}}
    // const findResult2 = await connection.find(query).toArray();
    // console.log('Found documents =>',findResult2)

    // 3) Find the student name start with J*
    // var query =  {name : /^J/}
    // const findResult3 = await connection.find(query).toArray();
    // console.log('Found documents =>',findResult3)



    // //  resul all 1,2,3 in one query 
    // var query =  {name : /^J/ ,coursename : "computer programming" ,mark : { $gt : 60}}
    // const findResult = await connection.find(query).toArray();
    // console.log('Found documents =>',findResult)

    return 'done'
}

main().then(console.log).catch(console.error).finally(() => client.close());