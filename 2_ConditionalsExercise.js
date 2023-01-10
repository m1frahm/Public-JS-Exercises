// In these exercises, you will be working on conditional statements,
// namely the if / else if / else and switch/case conditionals.

// For these exercises, you will place your code in a function block.
// If you don't know what a function is yet, that's ok, your code will be the
// same. The variables will be defined for you, you just have to plug in the
// logic.

// For example, if asked for exercise 0 to assign the value of myAnswer to the sum
// of num1 and num2, and were given this construct:

// function exercise0(num1, num2) {
//   let myAnswer;
//   // ------------------------------------------
//   // Write your code for exercise 0 below here:
//   // ------------------------------------------
// myAnswer = num1 + num2;
//   // ------------------------------------------
//   // And above here
//   // ------------------------------------------
//   return myAnswer;
// }

// You would put your code between the "below here"
// and "above here" blocks as shown:

// function exercise0(num1, num2) {
//   let myAnswer;
//   // ------------------------------------------
//   // Write your code for exercise 0 below here:
//   // ------------------------------------------
//   myAnswer = num1 + num2;
//   // ------------------------------------------
//   // And above here
//   // ------------------------------------------
//   return myAnswer;
// }

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

                  // EXERCISE 1.
// First reassign the value of `answer1` so that it has the value of:
// "num1 is small"
// Write an if statement that checks if a variable `num1` is greater than 10.
// If it is, then within your if statement code change the value of answer1 so
// that its new value would be a string that says:
// "The value of num1 is <num1 value> and is greater than 10".

function exercise1(num1) {
    let answer1 = num1 + " is small";
    if (num1 > 10) {
    answer1 = "The value of num1 is " + num1 + " and is greater than 10.";
  }
  return answer1;
  }
  console.log("                  ****E1 Answer");
  console.log(exercise1(4)); // E1 check
  console.log(exercise1(11)); // E1 check
  
                    // EXERCISE 2.
  // Write an if/else conditional statement that if given a number will assign
  // a string value of:
  // "<num2 value> is even" to `answer2`,
  // if `num2` is even
  // and a value of "<num2 value> is odd" to `answer2`,
  // if `num2` is odd.
  // ie. if num2 has a value of 4 then the message should read:
  // "4 is even"
  
  function exercise2(num2) {
    let answer2 = num2 + " " + "is even";
      if (num2 % 2 == 0) {
   return answer2;   
      } else {
    return num2 + " " + "is odd";
  }
  }
  console.log("                    ****E2 Answer");
  console.log(exercise2(2)); // E2 check
  console.log(exercise2(3)); // E2 check
  
  // //https://www.programiz.com/javascript/examples/even-odd#:~:text=In%20the%20above%20program%2C%20number,0%2C%20the%20number%20is%20even.
  
                    // EXERCISE 3.
  // Write an if/else if/else block such that if `num3` is positive, then
  // answer3 is assigned the string value of:
  // "<num3 value> is positive"
  // if `num3` is negative, then the value should be:
  // "<num3 value> is negative"
  // otherwise if the value is zero it should return
  // "<num3 value> is zero"
  
  function exercise3(num3) {
    let answer3 = num3 + " " + "is positive"; 
    if (num3 > 0) {
      return answer3;
    } else if (num3 < 0) {
      return num3 + " " + "is negative";
    } else {
      (num3 === 0)
      return num3 + " " + "is zero"
    }
      }
  console.log("                    ****E3 Answer");
  console.log(exercise3(0)); // E3 check
  console.log(exercise3(-2));// E3 check
  console.log(exercise3(1)); // E3 check
  
  //https://www.w3schools.com/js/js_if_else.asp
  
                    // EXERCISE 4.
  // Write an if/else statement such that if `varA` and `varB` are strings or
  // numbers and they have equal values, then change the value of answer4 to
  // "varA and varB are equal"
  // otherwise assign a value of "varA and varB differ"
  
  function exercise4(varA, varB) {
    let answer4 = "varA and varB are equal";
    if (typeof(varA) && typeof(varB) === 'string' || typeof(varA) && typeof(varB) === 'number' && varA === varB) {
      return answer4;
    } else {
      return "varA and varB differ";
    } 
  }
  console.log("                    ****E4 Answer");
  console.log(exercise4("1","1")); // E4 check
  console.log(exercise4("1",1));// E4 check
  console.log(exercise4("true",true));// E4 check
  
                    // EXERCISE 5.
  // In exercise 4, what are some of the unexpected cases where `varA` and `varB`
  // seemed like they are equal, but would not pass the tests? In your analysis
  // consider other data types beside strings and variables.
  
  console.log("                    ****E5 Answer On Line 140");
  //Some of the unexpected cases where varA and varB are equal is when the first parameter is a string such as "1" and the second parameter is a number such as 1. Although to the naked eye they look equal, but because it's a number versus a string, they would not pass the test. Another data type that wasn't included could be using booleans as comparison)
  
                    // EXERCISE 6.
  // Here, assign the value of true to answer6 if:
  // `varA` and `varB` are equal, but `varA` or `varB` does not equal `varC`
  // in the event this is not the case, change the value of answer6 to false
  
  function exercise6(varA, varB, varC) {
    let answer6 = "unassigned";
    // --------------------------------------------
    // Write your code for the exercise below here:
    // --------------------------------------------
    if (varA == varB && varA != varC || varB != varC){
      answer6 = "true";
    }else{
      answer6 = "false";
    }
    // --------------------------------------------
    // And above here
    // --------------------------------------------
    return answer6;
  }
  console.log("                    ****E6 Answer");
  console.log(exercise6(1, 1, 2));// E5 check
  console.log(exercise6(1, 1, 1));// E5 check
  
                    // // EXERCISE 7.
  // Use a switch conditional statement with case clauses such that if `num7` is
  // a number and it has a value of 1 that `answer7` is assigned the string:
  // "You won!"
  // if num7 is 7, then answer7 should be:
  // "You are lucky!"
  // if num7 is 101, then answer7 should be:
  // "Welcome to coding 101!"
  // if num7 is 1000000, then answer7 should be:
  // "You are one in a million!"
  // Otherwise, assign answer7 a value of:
  // "Thanks for that!"
  
  function exercise7(num7) {
    let answer7;
    switch (num7) {
      case 1:
        answer7 = "You won!";
        break;
      case 7:
        answer7 = "You are lucky!";
        break;
      case 101:
        answer7 = "Welcome to coding 101!";
        break;
      case 1000000:
        answer7 = "You are one in a million!";
        break;
      default:
        answer7 = "Thanks for that!";
    }
    // Only change code above this line
    return answer7;
  }
  console.log("                    ****E7 Answer");
  console.log(exercise7(1));// E7 check
  console.log(exercise7(7));// E7 check
  console.log(exercise7(101));// E7 check
  console.log(exercise7(1000000));// E7 check
  console.log(exercise7(5));// E7 check
  
  // https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/replacing-if-else-chains-with-switch
  
                    // EXERCISE 8.
  // Using any conditional, assign the value of true to answer8 if:
  // the values of amount1 and amount2 are between the values of
  // minimum and maximum
  // if not, assign a value of false to answer8
  
  function exercise8(amount1, amount2, minimum, maximum) {
    let answer8 = true;
    if (amount1 && amount2 >= minimum && amount1 && amount2 <= maximum) {
      return answer8; 
      }else{
      return false;
  }
  }
  console.log("                    ****E8 Answer");
  console.log(exercise8(4,5,1,9)); // E8 check
  console.log(exercise8(4,0,1,9));// E8 check
  
  
                // // EXERCISE 9.
  // In this exercise, if `item` is a number, follow the rules given in Exercise 7 except that `answer7` is replaced by `answer9`
  // If `item` is not a number, then assign a value to answer9 of:
  // "Please send a number, that was a <data type>."
  // for example, if item===true, the value should be:
  // "Please send a number, that was a boolean."
  
  function exercise9(item) {
    let answer9;
    switch (typeof item) {
      case 'number':
        answer9 = "This is a number!";
        break;
      case 'string':
        answer9 = "Please send a number, that was a string!";
        break;
      case 'boolean':
        answer9 = "Please send a number, that was a boolean!";
        break;
      default:
        answer9 = "Thanks for that!";
    }
    // Only change code above this line
    return answer9;
  }
  console.log("                    ****E9 Answer");
  console.log(exercise9("9")); // E9 check
  console.log(exercise9(9)); // E9 check
  console.log(exercise9(true)); // E9 check
  
  // //https://stackoverflow.com/questions/8754288/how-to-use-typeof-and-switch-cases-in-javascript
  
                  // EXERCISE 10.
  // This question is a modified version of a classic programming question
  // called "Fizz Buzz"
  // Using a conditional, assign a value of:
  // "Fizz" to `answer10` if the value of `num10` is divisible by 3
  // "Buzz" to `answer10` if the value of `num10` is divisible by 5
  // "Fizz Buzz" to `answer10` if the value of `num10` is divisible by 15
  // and if none of these conditions are satisfied, then assign the value of
  // `num10` to `answer10`
  
  function exercise10(num10) {
    let answer10;
  if ((num10 % 15) == 0){
        answer10 = "Fizz Buzz";
      } else if ((num10 % 5) == 0){
        answer10 = "Buzz";
     } else if ((num10 % 3) == 00){
        answer10 = "Fizz";
    } else {
        answer10 = num10;
    } 
    return answer10;
  }
  console.log("                    ****E10 Answer");
  console.log(exercise10(9)); // E10 check
  console.log(exercise10(10)); // E10 check
  console.log(exercise10(30)); // E10 check
  console.log(exercise10(4));// E10 check
  
  //https://stackoverflow.com/questions/31106668/find-if-a-number-is-divisible-by-3-or-5-fizzbuzz
  //https://theprogrammingexpert.com/javascript-divisible-by-3/
  
  // // Congrats, you made it to the end! You rock!
  // // Did you find this easy or hard? If you used references, which ones helped you?
  // // Please answer in a comment below.
  // // This was definitely a more difficult assignment. I had to read through the prompts carefully and make sure my syntax was correct. I also had to make sure I wasn't overthinking what the problem asked, for instance when it wants the output to be a number and string attached. Thankfully, there were helpful links on freecodecamp and online that helped me along the process. 
  
  // // Email your file to us or commit your file to GitHub and email us a link.