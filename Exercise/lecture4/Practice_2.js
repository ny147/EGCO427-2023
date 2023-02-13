
class MyMath {
  
    add = (a,b) => {return a + b};
  
    minus = (a,b) => {return a - b};
  
    multiply = (a,b) => {return a*b};
  
    divide = (a,b) => {return a/b};
  }
  
  var result = new MyMath();
  
  console.log(result.add(2,3));
  console.log(result.minus(2,3));
  console.log(result.multiply(2,3));
  console.log(result.divide(2,0));