// nochange.js
//   This script illustrates using the focus event
//   to prevent the user from changing a text field

// The event handler function to compute the cost
function CatchUser(value){
    if (value > 5)
        return 5;
    if (value < 0)
        return 0;
}
function computeCost() {
//add your code here
 var f = document.getElementById("french").value;
 var c = document.getElementById("coffee").value;
 var t    = document.getElementById("tea").value; 

 let french = CatchUser(f)
 let coffee = CatchUser(c)
 let tea = CatchUser(t)
  // Compute the cost
  // totalCost = french 
  document.getElementById("cost").value = (french*3.49) +  (coffee*2.5) + (tea*1.5)
  // document.getElementById("cost").value = a*3.49
}  //* end of computeCost
