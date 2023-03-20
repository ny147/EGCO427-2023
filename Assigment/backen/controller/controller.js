const mongo = require('../model/mongo');

async function showAge(findAge){
    const  collection = mongo.get().collection('students');
    var key = {age : -1}
    var query = {age : { $lt :  parseInt(findAge) }}
    const findResult = await collection.find(query).sort(key).toArray();
    return findResult
}
async function showMajor(findMajor){
    const collection = mongo.get().collection('students');
    var query = {major : findMajor};
    const findResult = await collection.find(query).toArray();
    return findResult
}

async function showAllContacts(){
    const collection = mongo.get().collection('contacts')
    const findResult = await collection.find().toArray()
    return findResult
}

async function showOneContacts(findId){
    const collection = mongo.get().collection('contacts')
    const query = {cid : parseInt(findId)}
    const findResult = await collection.find(query).toArray();
    return findResult
}
module.exports= {
    showAge,showMajor,showAllContacts,showOneContacts
}