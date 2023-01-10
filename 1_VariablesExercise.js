// Week 1 - Variables

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Data Types and Variables

// Exercise 1. Simply declare a variable named 'emptyVariable'

var emptyVariable = "";
// // Exercise 2. Declare a variable called 'myName'

var myName = "";
// // Exercise 3. Assign your name as the value for 'myName'

myName = "Mifrah";
console.log(myName);
// // Exercise 4. Declare a variable called dreamDestination and give it the value
// // of what your dream vacation destination is.

var dreamDestination = "Bali";

// Exercise 5. Make the following variables and assignments
// - a variable called num1 with a value greater than 1 and less than 10

var num1 = 4;
  
// - a variable called num2 with a value of greater than or equal to 1 and less
// than or equal to 10

var num2 = 10;

// Exercise 6. Write a comment below explaining the difference between the rules
// for num1 and num2 from Exercise 5. What numbers would be valid values for
// num2 but not num1?

// The rules for num1 are exclusive, while the rules for num1 are inclusive. So num1 would include numbers 2-9 only while num2 would have numbers 1-10. 

// Exercise 7. Now we will try some addition.
// a. Assign the values of 4 and 6 to num1 and num2, respectively.

num1 = 4;
num2 = 6;

// b. Make a new variable called 'theSum', and use 'num1' and

// 'num2' to assign its value using the "+" operator.

var theSum = num1 + num2;
console.log(theSum);

// Exercise 8. Now we will try some multiplication.
// Make a new variable called 'theProduct', multiply num1 and num2 and assign

var theProduct = num1*num2;
console.log(theProduct);
// the resulting value to 'theProduct'.

// Exercise 9.
// Make a new variable called 'statement' and using 'myName' and
// 'dreamDestination' and the concatenation method of your choice, make the
// value of statement to be:
// "Hi, my name is <your name>, and I can't wait to visit <your destination>!"

const statement = "Hi, my name is " + myName + ", and I can't wait to visit " + dreamDestination + "!";

console.log(statement);
// *NOTE* For the following exercises, put your answers in the line below
// the description of each exercise. For example, below a prompt, you may see:
// let myAnswerForExercise10= "";
// If your answer is "foo", then fill in the line to be:
// let myAnswerForExercise10 = "foo";

// Exercise 10. What is the data type of the value stored in 'dreamDestination',
// place your answer in the quotes below:

const myAnswerForExercise10 = "string";

// Exercise 11. What is the data type of the value stored in 'product',
// place your answer in the quotes below:

const myAnswerForExercise11 = "number";


// Exercise 12. What do you think the value of emptyVariable is?
// Place your answer below:

const myAnswerForExercise12 = "nothing, it's empty";

// Exercise 13. If
const A = "R";
const B = 1;
const C = 4;
const D = "D";

// What is the value of B + C
const myAnswerForExercise13 = "5";
var newVar = B + C;
console.log(newVar);

// Exercise 14 What is the value of
// A + "n" + D
const myAnswerForExercise14 = "RnD";
var newFour = A + "n" + D;
console.log(newFour);

// Exercise 15 What is the value of
// A + B * 2 + D + C / 2:
const myAnswerForExercise15 = "R2D2";
var newF = (A + B * 2 + D + C / 2);
console.log(newF);
//R + 1 * 2 + D + 4 / 2

// Exercise 16 What is the value of A * B
const myAnswerForExercise16 = "NaN";
var newFivee = A*B
console.log(newFivee);

// Exercise 17 What is the value of true || false
// const myAnswerForExercise17 = "true or false";

// Exercise 18 What is the value of 1 === "1"
const myAnswerForExercise18 = "false";

// Exercise 19 What is the value of 1 == "1"
const myAnswerForExercise19 = "true";

// Exercise 20 What is the value of 1 < 1
const myAnswerForExercise20 = "false";

// Exercise 21 What is the value of 1 < 2 < 3
const myAnswerForExercise21 = "true";

// Exercise 22 What is the value of 2 < 1 < 3
const myAnswerForExercise22 = "true";
console.log(2 < 1 < 3);
//note js reads from left to right// 

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
// This assignment was pretty simple. I did this live while on Saturday's coding session and used direction from Berlin if I got stuck. I had my notes from FreeCodeCamp open to check syntax. 

// Email your file to the course staff,
// or commit your file to GitHub and email us a link.