// Q 1 what is the output ?
// var x = 10;
// function foo() {
//    console.log(x);
//    var x = 20;
// }
// foo();   // undefined
  // This behavior is a result of hoisting, where variable declarations are moved to the 
  //top of their containing scope during compilation. Inside the foo function, the x variable
  // is hoisted, but its value is assigned later, resulting in undefined being logged.



  // Q.2  what is order of ouptut?
//   async function asyncFunc() {
//     console.log('A');
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     console.log('B');
//  }
//  console.log('C');
//  asyncFunc();
//  console.log('D');  // output will be C, A, D, B.

 
// Q.3 Write a JavaScript program to find the maximum number in an array

// let arr = [1,2,3,4,5,6,7,8,9];

// function maximumNumber (arr){
//   return Math.max(...arr);
// }

// console.log("max number is "+maximumNumber(arr));


// Q.4 hoisting 

// hoistedVariable = 3;
// console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
// var hoistedVariable;


// Q.5 Write a JavaScript program to reverse a given string. 

// function reverseString(str) {
//   return str.split('').reverse().join('');
// }
// const originalString = "Hello, world!";
// const reversedString = reverseString(originalString);
// console.log("Original string:", originalString);
// console.log("Reversed string:", reversedString);
   

// Q. 6 Write a JavaScript program to calculate the factorial of a given numbe

// function factorial(number) { 

//   if (number === 0 || number === 1) { 

//     return 1; 

//   } else { 

//     return number * factorial(number-1); 

//   } 

// } 

// console.log(factorial(5))

// Q. 7 Write a JavaScript program to find the largest element in a nested array.

function findLargestElement(nestedArray) { 

  let largest = nestedArray[0][0]; 

  for (let arr of nestedArray) { 

    for (let num of arr) { 

      if (num > largest) { 

        largest = num; 

      } 

    } 

  } 

  return largest; 

} 

