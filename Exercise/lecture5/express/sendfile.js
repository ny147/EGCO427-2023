
var express = require('express')
var app = express()
var fs = require('fs');
let path = "myjsonfile.json"
app.use(express.json()) //For JSON requests
app.use(express.urlencoded({ extended: true }));

fs.writeFileSync(path, '{"array":[]}');

const test = fs.readFileSync(path, { encoding: "utf8", flag: "r" });
const obj = JSON.parse(test );

app.get('/showForm', function (req, res) {
    res.sendFile(__dirname + "/" + "showForm.html")
})

app.post('/showData', function (req, res) {
    data = {
        fname: req.body.fname,
        lname: req.body.lname,
        input1: req.body.input1,
        input2: req.body.input2
    }
    let result = parseInt(data.input1) + parseInt(data.input2);

    info = {
        fname: data.fname,
        lname: data.lname,
        result: result
    }

    // var store_json = {}
    obj.array.push(info)
    fs.writeFileSync(path,JSON.stringify(obj));
    res.end(JSON.stringify(obj.array))
})

app.listen(8081)


