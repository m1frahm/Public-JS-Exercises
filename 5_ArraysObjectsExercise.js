// Week 3 - Arrays and Objects

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

        // Exercise 1. Make an empty array named animals

        var animals = []; // E1 Check

        // Exercise 2. Add the string "frog" to the array


animals[0] = "frog";
console.log(animals); // E2 Check


                      // Exercise 3
//Add 4 more animals of your choice to the array. Try to add all of them in one line of code.

animals[1] = "cat";
animals[2] = "dog";
animals[3] = "rat";
animals[4] = "mouse";
console.log(animals); // E3 Check


                      // Exercise 4. 
//Update the first item in the array to be "gorilla"

animals[0] = "gorilla";
console.log(animals); // E4 Check


                      // Exercise 5
//Print the number of items in the array (use the array property that will give you this information)

console.log(animals.length); // E5 Check


                      // Exercise 6
//Print the first item in the array

console.log(animals[0]); // E6 check


                      // Exercise 7
//Print the last item in the array (as part of your answer, use the same array property you used in exercise 5 above)

var lastIndex = animals.length -1;
var lastItem = animals[lastIndex];
console.log(lastItem); // E7 Check


                      // Exercise 8
//Remove the last item from the array

//full array 
console.log(animals);
console.log(animals.pop());
//last item removed
console.log(animals); // E8 Check

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop#:~:text=The%20pop()%20method%20removes,the%20length%20of%20the%20array.


                      // Exercise 9
//Now make a new array named assortedThings that contains at least 3 strings and 3 numbers.

// ANSWER WITHIN EXERCISE 10!!!!

                      // Exercise 10
//Write a for loop that iterates through the assortedThings array and prints each index and item, such as:
// Item #0 is potato
// Item #1 is 4
// Item #2 is Hello World
// ...

let assortedThings = ["potato", 4, "Hello World", 15, "cheese", 25];
for (let i = 0; i < assortedThings.length; i++) {
  console.log("Item #" + i + " is " + assortedThings[i]);
}


                      // Exercise 11
//Write a function that takes an array of numbers as a parameter. For each number in the array,
// print the number and "BIG" if it's over 100, "small" if it's between 0 and 100, and "negative" if
// it's less than 0. Example:
// if the array is [-2, 200, 50], print:
// -2 negative
// 200 BIG
// 50 small

function exercise11(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    if (num < 0) {
      console.log(num + " negative");
    } else if (num <= 100) {
      console.log(num + " small");
    } else {
      console.log(num + " BIG");
    }
  }
}
// Then write some function calls you would use to test your function.
console.log(exercise11([-2, 200, 50])) // E11 check
console.log(exercise11([-4, 800, 20])) // E11 check

  
                      // Exercise 12
//Make an object called me that contains the following keys: name, favoriteAnimal, favoriteNumber
// The values of those keys can be whatever you choose.

const aboutMe = {
  "name": "Mifrah",
  "favoriteAnimal": "Penguin",
  "favoriteNumber": 7
};

console.log(aboutMe);  // E12 Check


                       // Exercise 13
//Add another 2 keys and values to the object (you choose what they are)

aboutMe.favoriteCity = "New York";
aboutMe.favoriteActivity = "Cooking";
 
console.log(aboutMe); // E13 Check


                      // Exercise 14
//Update the favoriteAnimal value to something different

aboutMe.favoriteAnimal = "Cat";
console.log(aboutMe.favoriteAnimal);
console.log(aboutMe); // E14 check


                    // Exercise 15
//Print the value of favoriteAnimal.
// Note: there are at least 2 ways to get the value of a key, try to write both.

// see first one above
console.log(aboutMe["favoriteAnimal"]); // E15 Check (second method)


// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you? 
// Please answer in a comment below.
// I found this easier than previous exercises. Initially, we were only touching on introductory concepts. I used some of my notes from FreeCodeCamp. I also inserted some usesful links I had to google along the way right below my code. 

// Email your file to the course staff,
// or commit your file to GitHub and email us a link.