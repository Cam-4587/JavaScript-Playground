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
// let num =(10);
// console.log(num);
// num ++;
// console.log(num);
// num--;
// console.log(num);

// Comparison operators

// let canVote = false;
// let age = 19;

// if (age >= 18) {
//   canVote = true;
// }
// console.log(canVote);  // true


// console.log(1 == 1)	
// // true
// console.log(1 === "1")	
// // false
// console.log(1 != 1)	
// // false
// console.log(1 !== "1")	
// // true
// console.log(2 > 1)	
// // true
// console.log(2 >= 1)	
// // true
// console.log(2 <= 1)	
// // false

// var varOne =(1 === 2);
// var varTwo =(1 !== 2);
// var varThree =(1 > 2);
// var varFour =(1 <= 2);

// console.log(varOne);
// console.log(varTwo);
// console.log(varThree);
// console.log(varFour);



// Determining truth with logical operators

// let usernameCorrect = true;
// let passwordCorrect = true;
// let connected = true;
// let ready = usernameCorrect && passwordCorrect && connected;

// if (ready) {
//   console.log('Ready to go!');
// }

// - && (AND): returns true only if all operands are true
// - || (OR): returns true if any of the operands are true
// - ! (NOT): negates the operand it's used on

// let passport = true;
// let ticket = true;
// let weapons = false;
// let a = 10;
// let b = 5;

// let either = a > 10 || b <= 5;

// let getOnFlight = passport && ticket && !weapons;

// console.log(either)
// console.log(getOnFlight)


// Equality vs strict equality
// let a = 1;
// let b = "1";

// a == b   // true
// a === b  // false

// let varA = '10';
// let varB = 10;

// let varC = "";
// let varD = 0;
// let varE = 1;

// console.log (varA == varB);
// console.log (varA === varB);
// console.log (varC == varD);
// console.log (varC === varD);
// console.log (varC == varE);

// If/else statements
// let userLoggedIn = false;
// if (userLoggedIn) {
//   console.log('Welcome! You have logged in.');
// } else {
//   console.log('Please log in.');
// }

// let a = 1;
// let b = 2;
// let firstGreater;

// if (a > b) {
//   firstGreater = true; 
// } else {
//   firstGreater = false;
// }
// console.log(firstGreater);

// let a = 10;
// let b = 20;
// let result;

// Write your if statement here:
// if(a < b) {
// 	result = 'a is smaller';
// } else {
//     result = 'a is not smaller';
// }
// console.log(result);

//Ternary Expressions
// let memberType = 'basic';
// let price = memberType === 'basic' ? 5 : 10;
// console.log(price)

// let memberType = 'elite';
// let price = memberType === 'basic' ? 5
//           : memberType === 'pro' ? 10
//           : memberType === 'elite' ? 20
//           : 0;
// console.log(price)

// let a = 10;
// let b = 20;
// let result;

// // Write your code below this line. 
// result = (a < b)? 'a is smaller': 'a is not smaller';

// console.log(result);


// Multiple Conditions (If/Else If/Else)
// let memberType = 'elite';
// let price;

// if (memberType === 'basic') {
//   price = 5;
// } else if (memberType === 'pro') {
//   price = 10;
// } else if (memberType === 'elite') {
//   price = 20;
// } else {
//   price = 0;
// }
// console.log(price);  // 20

// let age = 15;
// let result;

// if (age > 21) {
//     result = "drink whiskey";
// } else if (age >= 18) {
//     result = "drink beer";
// } else if (age > 12) {
//    result = "drink cola";
// } else {
//     result = "drink apple juice"; 
// }

// console.log(result);


// switch case statements
// let day;
// let dayNumber = 2;

// switch (dayNumber) {
//   case 0:
//     day = 'Sunday';
//     break;
//   case 1:
//     day = 'Monday';
//     break;
//   case 2:
//     day = 'Tuesday';
//     break;
//   case 3:
//     day = 'Wednesday';
//     break;
//   case 4:
//     day = 'Thursday';
//     break;
//   case 5:
//     day = 'Friday';
//     break;
//   case 6:
//     day = 'Saturday';
//     break;
//   default:
//     day = 'Invalid day number';
// }

// console.log(day);  // Tuesday

// let result = '';
// let errorType = "page";

// // write your code here
// switch (errorType) {
//     case "username":
//         result = "That username is incorrect, please try again.";
//         break;
//     case "password":
//         result = "Incorrect password, please try again.";
//         break;
//     case "page":
//         result = "Sorry this page doesn't exist.";
//         break;
//     default:
//         result = "Error message unknown";
// }

// console.log(result);

// Nested If/Else Statements
// let user = true;
// let emailVerified = false;

// if (user == true) {

//   if (emailVerified == true) {
//     console.log("Welcome to our web-site")
//   } else {
//     console.log("Please verify your email")
//   }

// } else {
//   console.log("You need to be a user to visit this page")
// }

// For Loops
// let fruits = ['apples', 'oranges', 'bananas', 'cherries'];
// let numberOfFruits = fruits.length;

// for (let i = 0; i < numberOfFruits; i++) {
//   console.log(fruits[i] + ' are delicious!');
// }

// console.log('I love fruit!');

// let numbers = [42, 65, 0, 9, 73, 10, 11, 44];

// // Write your code here
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i] + 10);
// }

// While loops
// let fruits = ['apples', 'oranges', 'bananas', 'cherries'];
// let numberOfFruits = fruits.length;

// let i = 0;
// while (i < numberOfFruits) {
//   console.log(fruits[i] + ' are delicious!');
//   i++;
// }

// console.log('I love fruit!');

// let x = 0;
// while (x <= 10) {
// 	console.log(x);
// 	x += 1;
// }

//Do while loops
// let i = 10;
// do {
//   console.log('checking i...');
//   console.log('i is', i);
// } while (i < 10);
// console.log('Loop complete');

// let attemptedUploads = 0;

// do {
//     console.log("Attempting upload...");
//     attemptedUploads++;
// } while (attemptedUploads < 5);

// console.log("Upload attempts exceeded maximum");

// Controlling Iteration (Break & Continue)
// let i = 0;
// while (i <= 1000000) {
//   if (i === 5) {
//     console.log('Breaking!');
//     break;
//   }
//   console.log(i);
//   i++;
// }
// console.log('Loop has been broken.');

// for(let x = 0; x <= 20; x++) {

//     if(x % 2 == 1) {
//       continue;
//     }
    
//     if(x == 10) {
//       break;
//     }
//     console.log(x);
//     }

// nested iteration
// for (let x = 0; x < 3; x++) {
//     for (let y = 0; y < 3; y++) {
//       let point = [x, y];
//       console.log(point);
//     }
//   }

// for(let x = 0; x <= 3; x++) {
//     for(let y = 200; y <= 203; y++) {
//       console.log('Outer loop x:',x,'Inner loop y:', y);
//     }
//   }


// // Array indexing
// let cars = ['saab', 'volvo', 'ford'];
// console.log(cars[0]);  // 'saab'

// let clothes = ["shirt", "shoes", "socks", "hat", "vest", "shorts", "skirt", "scarf"];

// // Write your code here
// let varOne = clothes[0];
// console.log(varOne);
// let varTwo = clothes[5];
// console.log(varTwo);
// let varThree = clothes[4];
// console.log(varThree);

// Array methods
// let fruits = ['apples', 'pears', 'cherries', 'bananas', 'peaches', 'oranges'];
// let lastItem = fruits.pop();

// console.log(lastItem);
// console.log(fruits);

// let newLength = fruits.push('mangoes');
// console.log(newLength);
// console.log(fruits);

// let fruits = ['apples', 'pears', 'cherries', 'bananas', 'peaches', 'oranges'];
// let firstItem = fruits.shift();

// console.log(firstItem);
// console.log(fruits);

// let newLength = fruits.unshift('mangoes');
// console.log(newLength);
// console.log(fruits);

// let crew = ["Jean-Luc", "Wesley", "Warf", "William", "Data", "Tasha"];
// console.log(crew);

// // Write your code here
// let lastCrewMember = crew.pop();
// console.log(lastCrewMember);
// console.log(crew);

// crew.sort();
// console.log(crew);

// let newCrew = crew.slice(1, 4);
// console.log(newCrew);

// newCrew.push("Guinan");
// console.log(newCrew);

//Objects

// let spaceship = {
//     name: "Red Dwarf",
//     type: "Mining vessel",
//     owner: "Jupiter Mining Corporation",
//     captain: "Frank Hollister"
// };

// console.log(spaceship);

// Computers prorperty names
// let prop = "name";
// let person = {
//     [prop]: "john", 
//     lastName: "smith",
//     ["full" + prop]: "john smith"
// };

// // console.log(person)
// let data = {
//     firstName: "Arthur",
//     lastName: "Dent",
//     species: "Human"
// };

// // add your code here
// let firstName = data["firstName"];
// console.log(firstName);

// let species = data.species;
// console.log(species);

// data.age = 42;

// // this will log the data to the console
// console.log(data);

// Object methods
// let car = {
//     location: 'garage',
//     ignition: 'off',
//     fueled: true,
//   };
  
//   console.log(Object.keys(car));
//   // returns ["location", "ignition", "fueled"]
  
//   // Unsupported on JavaScript Tutor
//   console.log(Object.values(car));
//   // returns ["garage", "off", true]
  
//   console.log(Object.entries(car));  
//   // returns [Array(2), Array(2), Array(2)]
//   // Expanded view of the three arrays:
//   // 0: (2) ["location", "garage"]
//   // 1: (2) ["ignition", "off"]
//   // 2: (2) ["fueled", true]

// the 'this' keyword
// let car = {
//   location: 'garage',
//   ignition: 'off',
//   fueled: true,
//   start: function() {
//     this.ignition = 'on';
//   }
// };

// console.log(car.ignition);
// car.start();
// console.log(car.ignition);

// let classroom = {
//   numOfStudents: 0,
//   schoolHours: false,
//   playtime: false,
//   openSchool: function() {
//       this.schoolHours = true;
//       this.numOfStudents = 20;
//   },
//   breakTime: function() {
//       if(this.schoolHours) {
//           this.playtime = true;
//       }
//   }
// };

// classroom.openSchool();
// console.log(classroom.numOfStudents);

// classroom.breakTime();
// console.log(classroom.playtime);

// iterating Data structures
// let food = ['pizza', 'steak', 'pasta', 'fruit salad', 'stir fry'];

// for (let i = 0; i < food.length; i++) {
//   console.log(food[i]);
// }

// let food = ['pizza', 'steak', 'pasta', 'fruit salad', 'stir fry'];
// for (let i of food) {
//   console.log(i);
// }

// let food = ['pizza', 'steak', 'pasta', 'fruit salad', 'stir fry'];
// for (let i in food) {
//   console.log('index', i, 'is', food[i]);
// }


// let petNames = {
//   dog: 'Fido',
//   cat: 'Max',
//   fish: 'Bubbles',
//   python: 'Mr. Slithers',
// }

// for (let i in petNames){
//   console.log(petNames[i], 'is a', i);
// }

// let petNames = {
//   dog: 'Fido',
//   cat: 'Max',
//   fish: 'Bubbles',
//   python: 'Mr. Slithers',
// }

// let pairs = Object.entries(petNames);
// for (let pair of pairs){
//   console.log(pair[1], 'is a', pair[0]);
// }

// let gamerScores = {
//   john: 89,
//   paul: 725,
//   george: 553,
//   robert: 9302,
//   steve: 733,
// };
// // write your code here


// for(let gamer in gamerScores) {

//   console.log(`${gamer} scored ${gamerScores[gamer]}`);

// }

// let company = {
//   name: 'Apple, Inc',
//   founded: 1976,
//   financials: {
//     incomeStatement: {
//       years: [2020, 2019, 2018],
//       revenue: [125, 120, 115],
//       costs: [100, 100, 100],
//       profit: [25, 20, 15]
//     },
//     balanceSheet: {
//       years: [2020, 2019, 2018],
//       assets: [200, 190, 180],
//       liabilties: [100, 95, 90],
//       equity: [100, 95, 90]
//     },
//     cashFlow: {
//       years: [2020, 2019, 2018],
//       operating: [75, 65, 55],
//       investing: [22, 20, 18],
//       financing: [-94, -80, -75]    
//     }
//   },
//   competitors: ['Microsoft', 'Amazon', 'Samsung']
// }

// console.log(company.name);
// console.log(company.competitors);
// console.log(company.competitors[0]);
// console.log(company.financials.incomeStatement.years);
// console.log(company.financials.incomeStatement.revenue[0]);

// javascript code
// let studentData = [
//   {
//       name : "John Smith",
//       email: "john@gmail.com",
//       subjects: ["Math", "Psychology", "Physics", "Chemistry", "Biology"]
//   },
//   {
//       name : "Mary Jones",
//       email: "mary@gmail.com",
//       subjects: ["Fine Art", "Music", "Biology", "Geography", "Politics"]
//   }
// ];

// console.log(studentData);

// Defining Functions in JavaScript 
// function printString() {
//   console.log('Hello world!');
// }

// printString()

//Taking Parameters & Returning Results

// function printString(message) {
//   console.log(message);
// }
// printString('Hello from the function!');


// Calling functions
// function addTwo(num1, num2) {
//   return num1 + num2;
// }
// addTwo(3, 5);

// console.log(addTwo(3,5));

// function addTwo(num1, num2) {
//   return num1 + num2;
// }
// let sum = addTwo(3, 5);
// console.log(sum);  // 8


// Define an array of arrays (nested data structure)
// let operands = [
//   [3, 5],
//   [8, 6],
//   [1, 2],
//   [9, -2]
// ];

// // Define a function with parameters
// function addTwo(num1, num2) {
//   return num1 + num2;
// }

// // Create an empty array to hold the sums
// let sums = [];

// // Use a for loop to iterate the operands and call addTwo()
// for (let pair of operands) {
//   let sum = addTwo(pair[0], pair[1]);  // array indexing + function call
//   sums.push(sum);  // array methods
// }

// // Log the sums
// console.log(sums);

// javascript code
// function addTwoNumbers(num1, num2) {
//   return num1 + num2;
// };
// result = addTwoNumbers(40, 2)

// console.log(result)


// // Working with Math
// let random = Math.random();
// console.log(random);

// let someInteger = Math.floor(25.65);
// console.log(someInteger);  // 25


// let numbers = [];
// for (let i = 0; i < 10; i++) {
//   numbers.push(Math.floor(Math.random() * 100));
// }
// console.log(numbers);

// console.log(Math.round(1.25));  // 1
// console.log(Math.round(1.65));  // 2

// console.log(Math.min(1, 2, 3));  // 1
// console.log(Math.max(1, 2, 3));  // 3

// // If one of the objects can't be converted, the result is NaN:
// console.log(Math.min(1, 2, 'Hello!'));  // NaN
// console.log(Math.max(1, 2, 'Hello!'));  // NaN

// // If you give .min() nothing, you get Infinity:
// console.log(Math.min());  // Infinity

// // If you give .max() nothing, you get -Infinity:
// console.log(Math.max());  // -Infinity

// console.log(Math.pow(2, 4));  // 16
// console.log(Math.pow(3, 3));  // 27

// Negative bases to fractional exponents return NaN:
// console.log(Math.pow(-7, 1/3));  // NaN

// console.log(Math.sqrt(4));  // 2
// console.log(Math.sqrt(9));  // 3
// console.log(Math.sqrt(2));  // 1.4142135623730951

// console.log(Math.sqrt(0));  // 0
// console.log(Math.sqrt(-0));  // -0
// console.log(Math.sqrt(-1));  // NaN

// console.log(Math.PI)
// let maxNumber = Math.max(7, 4, 8, 11, 5, 2);
// console.log(maxNumber);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// let randomNumber = Math.floor(Math.random() * maxNumber);
// console.log(randomNumber);

// Working with date objects

// let date = new Date();
// console.log(date);

// let rightNow = Date.now()
// console.log(rightNow);

// let today = Date.now();
// let tomorrow = today + 86400000;  // 86400000 milliseconds in 1 day

// console.log(today);  // 1596477706417
// console.log(tomorrow);  // 1596564106417

// let today = Date.now();
// let tomorrow = today + 86400000;  // 86400000 milliseconds in 1 day

// let todayDate = new Date(today);
// let tomorrowDate = new Date(tomorrow);

// console.log(todayDate.toDateString());  // Mon Aug 03 2020
// console.log(tomorrowDate.toDateString());  // Tue Aug 04 2020

// today = new Date();

// // Now we can operate on it:
// console.log(today.getFullYear());      // The 4 digit year
// console.log(today.getMonth());         // The month (0-11)
// console.log(today.getDate());          // The day of the month (1-31)
// console.log(today.getDay());           // The day of the week (0-6)
// console.log(today.getHours());         // The hour (0-23)
// console.log(today.getMinutes());       // The minute (0-59)
// console.log(today.getSeconds());       // The seconds (0-59)
// console.log(today.getMilliseconds());  // The milliseconds (0-999)


// today = new Date(today);
// // Now we can operate on it:
// console.log(today.getUTCFullYear());      // The 4 digit year
// console.log(today.getUTCMonth());         // The month (0-11)
// console.log(today.getUTCDate());          // The day of the month (1-31)
// console.log(today.getUTCDay());           // The day of the week (0-6)
// console.log(today.getUTCHours());         // The hour (0-23)
// console.log(today.getUTCMinutes());       // The minute (0-59)
// console.log(today.getUTCSeconds());       // The seconds (0-59)
// console.log(today.getUTCMilliseconds());  // The milliseconds (0-999)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// let today = 1597673635658;

// let date = new Date(today);

// let day = date.getDate();
// let month = date.getMonth();
// let year = date.getFullYear();

// console.log(day);
// console.log(month);
// console.log(year);

// inline comment

/*
 Multi
 line 
 comment
 */

 /**
  * Docstring 
  * syntax
  */


 // <noscript></noscript>
 
 /*
 <html>
  <head>
    <title>HTML <noscript> Tag</title>
  </head>
  <body>
    <script type="text/javascript">
      console.log("Hello!");
    </script>
    <noscript>
      Your browser does not support JavaScript!
    </noscript>
  </body>
</html>
 */