// dynValue.js
//   Illustrates dynamic values
//  weerawich wongchachalikun 6213166 
var helpers = ["Bob 1234 Bangkok", "Mary 5678 Phuket","Susan 9012 Nakorn Prathom"];

// *********************************************************** 
// The event handler function to change the value of the 
//  textarea
//Add your code here

function messages(adviceNumber){
    document.getElementById("adviceBox").value = helpers[adviceNumber];
}