const express = require('express');
const router = express.Router();
const {showAge,showMajor,showAllContacts,showOneContacts} = require('../controller/controller')


// router.get('/', async (req, res, next) => {
//   try {
//     const collection = mongo.get().collection('students');
//     const documents = await collection.find().toArray();
//     res.json(documents);
//   } catch (err) {
//     next(err);
//   }
// });

// router.get('/showage/:age',(req,res)=>{
//     console.log("Show age :%s",req.params.age)
//     showAge(req.params.age).then((result) => {
//         console.log(result)
//         res.json(result)
//     })
//     .catch(console.error)
// })

// router.get('/showmajor/:major',(req,res)=>{
//     console.log("Show major :%s",req.params.major)
//     showMajor(req.params.major).then((result) => {
//         console.log(result)
//         res.json(result)
//     })
//     .catch(console.error)
// })
router.get('/contacts/',(req,res)=>{
    showAllContacts().then((result)=>{
        res.json(result)
    })
})
router.get('/contacts/:id',(req,res)=>{
    console.log("Show id :%s",req.params.id)
    showOneContacts(req.params.id).then((result)=>{
        res.json(result)
    })
})

router.post('/contacts/',(req,res)=>{
    
    AddnewContacts().them((result)=>{
        res.json(result)
    })
})


module.exports = router;
