const {MongoClient} = require('mongodb')


// import { MongoClient } from 'mongodb'

const url = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(url)

const dbName = 'ProductDB'

async function main (){
    await client.connect()
    console.log("Database connection successfully");

    const db = client.db(dbName)
    const connection = db.collection('products');

    // var obj =   {   name : "weerawich wongchatchalikun",
    //                 price : 10
    //             }
    // const insertResult = await connection.insertOne(obj);

    // var obj = [ 
    //     { name: "Book", price: 10 },
    //     { name: "Pencil", price: 5 },
    //     { name: "Calculator", price: 40 },
    //     { name: "Notebook", price: 15 },
    //     { name: "T-Shirt", price: 20 },
    //     { name: "Jacket", price: 20 }
    //   ]

    // const insertResult = await connection.insertMany(obj);

    // const findResult = await connection.findOne({})
    // console.log('Insert document =>',findResult)

    // //  find all
    // const findResult = await connection.find({}).toArray();
    // console.log('Insert document =>',findResult)

    // // Query 
    // // let query = {name : "Pencil"}
    // // let query = {price : 10}
    // let query = {name : /^C/}
    // const findResult = await connection.find(query).toArray();
    // console.log('Found documents =>',findResult);

    // // Sorting
    // var key = {name : -1}
    // const findResult = await connection.find().sort(key).toArray();
    // console.log('Found documents =>',findResult)

    // // Delete 
    // let query = {name : "Book"}
    // const deleteResult = await connection.deleteOne(query);
    // console.log('Delete documents =>',deleteResult);

    // // Delete many
    // let query = {name : /^C/}
    // const deleteResult = await connection.deleteMany(query);
    // console.log('Delete documents =>',deleteResult);

    // // Update one
    // let query = {name : "Pencil"}
    // let newValue = {$set: {name : "Color Pencil",price : 20}}
    // const UpdateResult = await connection.updateOne(query,newValue);
    // console.log('Delete documents =>',UpdateResult);

    // // Update one
    // let query = {name : /^C/}
    // let newValue = {$set: {name : "Color Pencill",price : 50}}
    // const UpdateResult = await connection.updateMany(query,newValue);
    // console.log('Delete documents =>',UpdateResult);

    // // Drop collection
    // const dropResult = await connection.drop()
    // console.log("Drop Colletion =>",dropResult)


    //  practice
    // //insert 
    //   var obj = [ 
    //     { name: "Computer", price: 1000 },
    //     { name: "Cup", price: 15 },
    //   ]
    //   const insertResult = await connection.insertMany(obj);
    //   console.log("insert new data",insertResult)

    // Sorting
    var key = {price : 1}
    var query = {price : { $gt : 15}}
    const findResult = await connection.find(query).sort(key).toArray();
    console.log('Found documents =>',findResult)
    
    return 'done'
}

main().then(console.log).catch(console.error).finally(() => client.close());

// const { MongoClient } = require('mongodb');
// // or as an es module:
// // import { MongoClient } from 'mongodb'

// // Connection URL
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// // Database Name
// const dbName = 'Product_CI2023';

// async function main() {
//     return 'done.';
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());