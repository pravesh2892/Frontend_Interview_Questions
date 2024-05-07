// Q 1 what is the output ?
// var x = 10;
// function foo() {
//    console.log(x);
//    var x = 20;
// }
// foo();   // undefined
  // This behavior is a result of hoisting, where variable declarations are moved to the top of their containing scope during compilation. Inside the foo function, the x variable is hoisted, but its value is assigned later, resulting in undefined being logged.