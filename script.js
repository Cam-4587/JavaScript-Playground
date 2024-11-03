//'npm install node.js' and node script.js

// console.log("Hello World")

// window.alert("Some message here")
// alert("Some message here"); 

// let window_height = window.innerHeight 
// console.log(window_height)

// let window_width = window.innerWidth
// console.log(window_width)

// debugger

// let myVar_l = "a variable";
// const myVar_c = "a variable";
// var myVar_v = "a variable";

// const pi = 3.14;
// let radius =12;
// var circumference = pi * 2 * radius;

// console.log(pi);
// console.log(radius);
// console.log(circumference);

// let globalVar = "My global variable"
// // globalVar has global scope

// for (let i = 0; i < 5; i++) {
//   let localVar = "myLocalVar";
//   console.log(i);

//   // Both i and localVar have local scope
// }

// // Global scope

// if (...) {
//     // Local scope
//   }
  
//   // More global scope
  
//   function myFunction() {
//     // Local scope
//   }
  
//   // More global scope
  
//   for (...) {
//     // Local scope
//   }


// Global and Local Scope
// // This is needed for the unit tests, do not remove it or you will fail!
// "use strict";

// const company = "Big Bucks co.";
// let profit = 900;
// let financeManager = "Richard";

// if (profit < 1000) {
// 	var richardFired = true;
// 	financeManager = "Fay";
// } 

// console.log(company);
// console.log(financeManager);
// console.log(richardFired);

// Define the variables below to fix the syntax errors
// Strings
// let quote = "Our greatest glory is not in never falling, but in rising every time we fall."
// let meaningOfLife = "42"
// let oneEqualsTwo = "false"

// console.log(quote)
// console.log(meaningOfLife)
// console.log(oneEqualsTwo)

// Quotations
// // Define the variables below:
// let stringWithQuotes = 'Confucius once said, "It does not matter how slowly you go, as long as you do not stop."';
// let stringWithApostrophe = "Everything you've ever wanted is on the other side of fear.";

// // These lines will log your quotes to the console:
// console.log(stringWithQuotes);
// console.log(stringWithApostrophe);


// Special string characters
// // Define the haiku variable here:
// let haiku = 'Power down your brain\nMotion will now take over\nRide this inertia'
// // This will log your haiku to the console:
// console.log(haiku);


// Template literals
// let firstName = "Mike";
// let email = "mike@email.com";

// // Write your code here
// let message = `Dear ${firstName},
// Thank you for subscribing!
// Your email: ${email}`

// console.log(message)


// String Concatenation
// let username = "Jack";

// let message = "Welcome back " + username + "! You are now logged in.";

// console.log(message);


// Strings methods
// These variables will be sliced and concatinated
// to form the emailAddress variable:
// let fullName = 'Andrew Martin';
// let domainName = 'gmail';
// let tld = 'com';

// // Define the emailAddress variable here.
// // Remember to use the slice() and toLowerCase() string methods:
// let emailAddress = fullName.slice(0, 6) .toLowerCase() + '.' + fullName.slice (7). toLowerCase() + '@' + domainName + '.' + tld;

// // This will log the emailAddress variable to the console
// console.log(emailAddress);

// Determining the Data type
// let itmOne = 10;
// let itmTwo = '20';
// let itmThree = true;

// console.log(typeof itmOne)
// console.log(typeof itmTwo)
// console.log(typeof itmThree)
// console.log(typeof 'itmOne + itmTwo')


// // Number
// let myStringInt = '10';
// let myStringFloat = '1.275';

// // Fix this code so that it adds correctly
// let result1 = parseInt(myStringInt) + parseFloat (myStringFloat);
// let result2 = (myStringInt) + (myStringFloat);
// let result3 = parseFloat(myStringInt) + parseInt (myStringFloat);
// // This will print your results to the console
// console.log(result1);
// console.log(result2);
// console.log(result3);


//Issues about floats
// console.log(0.1 + 0.2);  // 0.30000000000000004
// console.log((0.1 * 10 + 0.2 * 10) / 10);  // 0.3

// console.log(1.03 + 1.04);  // 2.0700000000000003
// console.log((1.03 * 100 + 1.04 * 100) / 100);  // 2.07

// null and undefined
// let admin = null
// let passwordRequired 

// console.log(admin);
// console.log(passwordRequired);

// Infinity, -Infinity and NaN Challenge
// let notANumber = isNaN("true");
// let isANumber = isNaN(3);
// let finiteNumber = isFinite (3);
// let notAFiniteNumber=isFinite (1.93e308);

// console.log(notANumber);
// console.log(isANumber);
// console.log(finiteNumber);
// console.log(notAFiniteNumber);

//Type Coercion
// javascript code
// let num100 =(100)
// let str100 =("100")

// console.log(num100 ==str100);
// console.log(num100 === str100);
// console.log(num100 + str100);
// console.log(num100 + Number(str100));

//Storing values with Assingment Operators
// javascript code
// let num = (10);
// console.log(num);
// num += 10;
// console.log(num);
// let numB =(10);
// console.log(numB);
// numB *= 10;
// console.log(numB)

// Basic math operators
// console.log(1+1);   // 2
// console.log(2*10);  // 20
// console.log(15/3);  // 5
// console.log(3**3);  // 27

// let x = 2;
// let y = 3;
// let z = 4;

// console.log(x + y * z);  // 2 + 12 = 14
// console.log((x+y) * z);  // 5 * 4 = 20

// Incrementing and Decrementing Challenge

// javascript code
let num =(10);
console.log(num);
num ++;
console.log(num);
num--;
console.log(num);