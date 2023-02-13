/*
var http = require('http'); 
http.createServer(function (request, response) {
    response.writeHead(200,
     {
         'Content-Type': 'text/plain'
    });
    response.end('Hello World\n');
}).listen(8800);
console.log('Server running at http://127.0.0.1:8800/');
*/

/*
console.log(__filename)
console.log(__dirname)
*/


/*function hello(){
    console.log("hello world")
}

var t =setTimeout(hello,3000)*/
// clearTimeout(t)   ถ้าใช้ clear มันจะถูกยกเลืก เนื่องจาก node js ทำงานแบบ async ทำงานส่วนนี้ก่อน ไม่ต้องรอบรรทัดที่ 19



/*var i =0;
//var t 
var Counter = setInterval(counter,2000);
function counter(){ 
    i++;
  console.log(i);
}
setTimeout(function(){ clearInterval(Counter);
},10000);*/



//// use PI from other module
// const circle = require('./circle.js');

// console.log(circle.area(3))
// console.log(circle.add(2,3));
// console.log(circle.PI)



//-----app.js-----//
// read file
// var util = require('util');
// var fs = require('fs');

// function readFile(str, callback){
//     var lines =[];
//     fs.readFile(str, function (err, data) {
//         if (err) throw err; 
//         lines.push(data); 
//         console.log(data.toString());
//     });
//    callback(lines);
// }

// var a, b;
// readFile('./20_short.txt', function(data){
//     a= data;
// }); 

// readFile('./10.txt',function(data){
//     b= data;
// }); 
// util.log("a -- "+a);
// util.log("b -- " +b);



//  assert 
// test case
// var assert = require('assert');
// function add (a, b) { 
//     return a + b;
// }
// var expected = add(1,2);
// assert( expected === 4, 'one plus two is three');

// -----------buffer-------------
// buf = new Buffer(10);
// buf.write("abcdefghj","ascii");
// console.log(buf.toString('base64'));
// buf = buf.slice(0,5);
// console.log(buf.toString('utf8'));


// -----------------encrpyt-----------------------
var crypto=require('crypto');var fs=require('fs');
var shasum = crypto.createHash('sha1');
var s = fs.ReadStream('file.txt');

s.on('data',function(d) {
  shasum.update(d);
});
s.on('end',function() {
    var d = shasum.digest('hex');
  console.log(d+' -- file.txt');
});


// // -----dns look-----//
// var dns = require('dns');
// dns.lookup('www.google.com', function onLookup(err,addresses, family) {
//   console.log('addresses:', addresses);
// });


//-----writle file-----//
// var fs = require('fs'); 
// fs.writeFile('message.txt', 'Hello Node', function (err) {
//   if (err) throw err;
//     console.log('It\'s saved!');
// });
// console.log('next process')

// read file 
// var fs=require('fs')
// var readMe = fs.readFileSync('./file.txt','utf8')
// console.log(readMe)
// fs.mkdir('Project', function(){
// fs.writeFileSync('./Project/Output.txt', readMe)
// })

// os information
// var os=require('os');
// console.log(os.hostname());
// console.log(os.type());
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.release());
// console.log(os.uptime());
// console.log(os.loadavg());

// // read line
// var readline = require('readline');
// var rl = readline.createInterface({
// input:process.stdin,
// output:process.stdout
// });
// rl.question("What do you think of node.js? (easy/difficult)",function(answer) {
// // TODO: Log the answer in a database

// console.log("Thank you for your valuable feedback:", answer);
// rl.close();});

// //  steram 
// var fs = require('fs');
// var zlib = require('zlib');
// var r = fs.createReadStream('file.txt');
// var z = zlib.createGzip();
// var w = fs.createWriteStream('file.txt.gz');
// r.pipe(z).pipe(w);

// // write stream 
// var fs=require('fs')
// var data='Hello World Modi quia maiores. Nihil sapiente et atque. Sint numquam molestiae iure nemo fugiat asperiores aspernatur ducimus. Sit rerum officiis reprehenderit hic nisiodit officia accusantium eos.'
// var writerStream=fs.createWriteStream('output.txt')
// writerStream.write(data,'utf8')
// writerStream.end()
// writerStream.on('finish',function(){
// console.log("Output finish")
// })

//  url module 
// var url = require('url');
// var result =
// url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash');
// console.log(result);

// //  http
// var http=require('http')
// var fs=require('fs')
// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/html'})
//     var myStream = fs.createReadStream(__dirname+'/'+'index.html','utf8')
//     myStream.pipe(res)
// }).listen(8081,'127.0.0.1')

// // json 
// var http=require('http')
// var fs=require('fs')
// var myUser={
// "name":"Reese",
// "job":"Coordinator",
// "age":"30"
// }
// http.createServer(function(rew,res){
//     res.writeHead(200,{'Content-Type':'application/json'})
//     //  convert json to string
//     res.end(JSON.stringify(myUser)) 
// }).listen(8081,'127.0.0.1')


//  route
var http=require('http')
var fs=require('fs')

http.createServer(function(req,res){
if(req.url==='/home'||req.url==='/'){
    res.writeHead(200,{'Content-Type':'text/html'})
    var myStream = fs.createReadStream(__dirname+'/'+'index.html','utf8')
    myStream.pipe(res)
}
else if(req.url==='/about'){
    res.writeHead(200,{'Content-Type':'text/html'})
    var myStream = fs.createReadStream(__dirname+'/'+'about.html','utf8')
    myStream.pipe(res)
}
else{
    res.writeHead(404,{'Content-Type':'text/html'})
    var myStream = fs.createReadStream(__dirname+'/'+'notfound.html','utf8')
    myStream.pipe(res)
    }
}).listen(8081,'127.0.0.1')