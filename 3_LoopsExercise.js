
// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

                              // Exercise 1. 
//Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

const exerciseOne = [];
let a = 1;
while (a <= 5) {
  exerciseOne.push(a);
  a++;
}
console.log("            ****E1 Answer");
console.log(exerciseOne); // E1 check


                            // Exercise 2. 
//Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

const exerciseTwo = [];
let b = 1;

do {
  exerciseTwo.push(b);
  b++;
} while (b <= 5);
console.log("            ****E2 Answer");
console.log(exerciseTwo); // E2 check


                              // Exercise 3
//Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

const exerciseThree = [];
for (let c = 1; c <=5; c++) {
  exerciseThree.push(c);
}
console.log("            ****E3 Answer");
console.log(exerciseThree); // E3 check


                            // Exercise 4
//Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.

                           // // while loop
const exerciseFourA = [];
let d = 10;
while (d > 0) {exerciseFourA.push(d); d--;}
console.log("            ****E4 Answer 1");
console.log(exerciseFourA); // E4 check

                            // //do while
const exerciseFourB = [];
let e = 10;
do {
  exerciseFourB.push(e);
  e--;
} while (e >= 1);
console.log("            ****E4 Answer 2");
console.log(exerciseFourB); // E4 check

                            // //for loop
const exerciseFourC = [];

for (let f=10; f >=1; f--) {
  exerciseFourC.push(f);
}
console.log("            ****E4 Answer 3");
console.log(exerciseFourC); // E4 check


                            // Exercise 5
//Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

                      // // while loop *inclusive
const exerciseFiveA = [];
let g = 7;

while (g <= 27) {exerciseFiveA.push(g); g++;}
console.log("            ****E5 Answer");
console.log(exerciseFiveA); // E5 check

                        // //do while *inclusive
const exerciseFiveB = [];
let h = 7;

do {exerciseFiveA.push(h); h++;} 
while (h <= 27);
console.log(exerciseFiveA); // E5 check

                            // //for loop *inclusive
const exerciseFiveC = [];
for (let i = 7; i <=27; i++) {
  exerciseFiveC.push(i);
}
console.log(exerciseFiveC); // E5 check


                              // Exercise 6. 
//Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

                              //while loop *inclusive
const exerciseSixA = [];
let j = 0;

while (j <= 100) {
  exerciseSixA.push(j);
  j+=10;
}
console.log("            ****E6 Answer");
console.log(exerciseSixA); // E6 check

// https://stackoverflow.com/questions/10642671/increment-variable-by-more-than-1

                            // //do while *inclusive
const exerciseSixB = [];
let k = 0;

do {
  exerciseSixB.push(k);
  k+=10;
} while (k <= 100);

console.log(exerciseSixB); // E6 check

                                // //for loop
const exerciseSixC = [];

for (let l = 0; l <=100; l+=10) {
  exerciseSixC.push(l);
}
console.log(exerciseSixC); // E6 check


                              // Exercise 7. 
//Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

// This is an infinite loop because the middle condition will always result in something less than and therefore have an answer.

 let counterFour = 1;
while (counterFour > -100) {
  console.log("HELP ME!");
  counterFour--;
} 
console.log("            ****E7 Answer");
console.log(counterFour); // E7 Check


                               // Exercise 8
//Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.

var favInteger = 7;
const exerciseEight = [];
for (let m = 0; m <= favInteger; m++) {
  exerciseEight.push(m);
} 
console.log("            ****E8 Answer");
console.log(exerciseEight); // E8 Check


                              // Exercise 9
//Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

var favInteg = 97;
const ourArray = [];
for (let n = 0; n <= 100; n++) {
  ourArray.push(n)
  if (n == 97){
    console.log(n + " " + "my favorite number!");
  } else {
   console.log (n + " " + "not my favorite number!");
  }
      }

console.log("            ****E9 Answer Above");


                              // Exercise 10
//In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:

// I believe it ultimately depends on the person and which loop they are comfortable with. However, if you are creating you know many times you are doing an iteration, you can use a for loop. If you don't know how many iterations, then it is best to use a while loop. 

//https://builtin.com/software-engineering-perspectives/for-loop-vs-while-loop
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/concatenating-strings-with-plus-operator


                              // Exercise 11
//Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

// counting down from 0
// *********************************** 
// counting down from 1
// inside 1
// *********************************** 
// counting down from 2
// inside 2
// inside 1
// *********************************** 
// counting down from 3
// inside 3
// inside 2
// inside 1
// *********************************** 

 for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter > 0; insideCounter--) {
    console.log("inside",insideCounter);
  }
  console.log("***********************************");
}

console.log("            ****E11 Answer Above");
// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you? 
// Please answer in a comment below.
// This assignment got difficult towards the end. I had to google fragments of the problem and/or use FreeCodeCamp. It helps to slowly read the prompt and only read line by line.

// Email your file to us or commit your file to GitHub and email us a link.