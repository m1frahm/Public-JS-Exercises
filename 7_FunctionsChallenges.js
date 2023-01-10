// Week 2 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com 
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

                    // Exercise 1
//Write a function called prependToString, which accepts two strings.
// The function should return a new string with the second string prepended to the first string.
// Examples:
// prependToString('awesome', 'very') // --> 'veryawesome'
// prependToString('world', 'hello ') // --> 'hello world'
// prependToString('nothing', '') // --> 'nothing'

function prependToString(firstWord, secondWord) {
    return secondWord + firstWord;
  }
  console.log("            ******E1 Answer");
  console.log(prependToString('awesome', 'very')); //E1 Check
  console.log(prependToString('world', 'hello ')) //E1 Check
  console.log(prependToString('nothing', '')) //E1 Check
  
  // https://masteringjs.io/tutorials/fundamentals/string-concat#:~:text=The%20%2B%20Operator,used%20to%20concatenate%20two%20strings.&text=You%20can%20also%20use%20%2B%3D,for%20a%20%3D%20a%20%2B%20b%20.&text=If%20the%20left%20hand%20side,hand%20side%20to%20a%20string.
  
  
                        // Exercise 2
  //Write a function called stringIncludes, which accepts two strings: the first string is a word and the second string is a single character.
  // The function should return true if the first string includes the character, otherwise it should return false.
  // IMPORTANT: Do not use the built-in string.includes() function!
  // Examples:
  // stringIncludes('awesome', 'e'); // --> true
  // stringIncludes('awesome', 'z'); // --> false
  
  //write a function with two parameters
  //use a for loop to go through each letter of firstword
  //if i of word = index 0 of second string return true
  // will use if else statement
  
  function stringIncludes(word, letter) {
    for (let a = 0; a < word.length; a++)
      if (word[a] === letter) {
        return true;
      }
      return false;
    }
  console.log("            ******E2 Answer");
  console.log(stringIncludes('awesome', 'e')); // E2 Check
  console.log(stringIncludes('awesome', 'z')); // E2 Check
  
  
                      // Exercise 3
  //Write a function called stringLastIndexOf, which accepts two strings: the first is a word and the second is a single character.
  // The function should return the last index at which the character exists or -1 if the character is not found.
  // IMPORTANT: Do not use the built in "string".lastIndexOf() function!
  // Examples:
  // stringLastIndexOf('awesome', 'e'); // --> 6
  // stringLastIndexOf('awesome', 'z'); // --> -1
  
  //need a loop to go through each character of the first word
  //stop when it matches that letter and give count
  //otherwise return -1
  
  function stringLastIndexOf(theword, thecharacter) {
    for (let b = theword.length - 1; b >= 0; b--) 
      if (theword[b] === thecharacter) {
        return b;
      }
        return -1;
  }
  console.log("            ******E3 Answer");
  console.log(stringLastIndexOf('awesome', 'e')); // E3 Check
  console.log(stringLastIndexOf('awesome', 'z')); // E3 Check
  
  //https://stackoverflow.com/questions/59511022/alternative-to-the-lastindexof-function
  
  
                      // Exercise 4
  //Write a function called removeFromString, which accepts a string, a starting index (number) and a number of characters to remove.
  // The function should return a new string with the characters removed.
  // Examples:
  // removeFromString('Elie', 2, 2) // --> 'El'
  // removeFromString('Elie', 0, 1) // --> 'lie'
  // removeFromString('Hello School', 0, 6) // --> 'School'
  // removeFromString('Hello School', 2, 4) // --> 'HeSchool'
  // removeFromString('Hello School', 6, 400) // --> 'Hello '
  
  // function with three parameters (string, index, integer)
  // index is where to start
  // integer is characters to remove = new output 
  
  function removeFromString(str, start, charToRemove){
    let end = start+charToRemove
    let strToBeRemoved = str.substring(start, end)
    return str.replace(strToBeRemoved, "")
  }
  console.log("            ******E4 Answer");
  console.log(removeFromString('Elie', 2, 2));
  console.log(removeFromString('Elie', 0, 1));
  console.log(removeFromString('Hello School', 0, 6));
  console.log(removeFromString('Hello School', 2, 4));
  console.log(removeFromString('Hello School', 6, 400));
  
  //https://stackoverflow.com/questions/53460413/remove-characters-from-string-and-return-new-string-with-removed-characters
  
  
                      // Exercise 5
  //Write a function called indexOf, which accepts an array and a number.
  // The function should return the first index at which the value exists or -1 if the value is not found.
  // IMPORTANT: Do not use the built-in array.indexOf() function!
  // Examples:
  // let arr = [5, 10, 15, 20];
  // console.log(indexOf(arr, 20)); // --> 3
  
  // let arr2 = [1, 2, 3, 4, 5];
  // console.log(indexOf(arr2, 2)); // --> 1
  
  // let arr3 = [1, 2];
  // console.log(indexOf(arr3, 10)); // --> -1
  
  function indexOf(arr, num) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
        return i;
      }
    }
    return -1;
  }
  
  console.log("            ******E5 Answers");
  let arr = [5, 10, 15, 20]; // E5 CheckP1
  console.log(indexOf(arr, 20)); // --> 3
  
  let arr2 = [1, 2, 3, 4, 5]; // E5 CheckP2
  console.log(indexOf(arr2, 2)); // --> 1
  
  let arr3 = [1, 2]; // E5 CheckP3
  console.log(indexOf(arr3, 10)); // --> -1
  
  
                        // Exercise 6
  //Write a function called includes which accepts a collection, a value, and an optional starting index. The function should return true if the value exists in the collection when we search starting from the starting index. Otherwise, it should return false.
  // The collection can be a string, an array, or an object. If the collection is a string or array, the third parameter is a starting index for where to search from. If the collection is an object, the function searches for the value among values in the object; since objects have no sort order, the third parameter is ignored.
  // Examples:
  // console.log(includes([1, 2, 3], 1)) // --> true
  // console.log(includes([1, 2, 3], 1, 2)) // --> false
  // console.log(includes([1, 2, 3], 6)) // --> false
  // console.log(includes({ 'a': 1, 'b': 2 }, 1)) // --> true
  // console.log(includes({ 'a': 1, 'b': 2 }, 'a')) // --> false
  // console.log(includes('abcd', 'b')) // --> true
  // console.log(includes('abcd', 'e')) // --> false
  // console.log(includes('abcd', 'a', 2)) // --> false
  
  
  //discord notes, try using array.isArray() method or instanceof
  
  function includes(collection, value, startIndex = 0) {
    if (typeof collection === 'string' || Array.isArray(collection)) {
      for (let i = startIndex; i < collection.length; i++) {
        if (collection[i] === value) {
          return true;
        }
      }
      return false;
    } else if (typeof collection === 'object') {
      for (let val of Object.values(collection)) {
        if (val === value) {
          return true;
        }
      }
      return false;
    }
  }
  
  //OR
  // function includes(collection, value, startIndex = 0) {
  //   if (typeof collection === 'string' || Array.isArray(collection)) {
  //     for (let i = startIndex; i < collection.length; i++) {
  //       if (collection[i] === value) {
  //         return true;
  //       }
  //     }
  //     return false;
  //   } else if (typeof collection === 'object') {
  //     for (let val of Object.values(collection)) {
  //       if (val === value) {
  //         return true;
  //       }
  //     }
  //     return false;
  //   }
  // }
  console.log("            ******E6 Answers");
  console.log(includes([1, 2, 3], 1)) // --> true
  console.log(includes([1, 2, 3], 1, 2)) // --> false
  console.log(includes([1, 2, 3], 6)) // --> false
  console.log(includes({ 'a': 1, 'b': 2 }, 1)) // --> true
  console.log(includes({ 'a': 1, 'b': 2 }, 'a')) // --> false
  console.log(includes('abcd', 'b')) // --> true
  console.log(includes('abcd', 'e')) // --> false
  console.log(includes('abcd', 'a', 2)) // --> false