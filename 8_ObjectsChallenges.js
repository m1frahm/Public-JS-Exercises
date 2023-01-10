                                // Week 3 - Objects


                                  // Exercise 1
//Write a function called keys, which accepts an object and returns an array of all of the keys in the object.
// IMPORTANT: Do not use the built-in Object.keys() function!
// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// keys(obj); // ["a", "b", "c"]
// let obj2 = { first: 'Matt', last: 'Lane' };
// keys(obj2); // ["first", "last"]
// let obj3 = {};
// keys(obj3); // []

// create new var object and set = to object/keys
//create function called keys
// convert obj return an array instead
//https://stackoverflow.com/questions/66086223/convert-an-object-to-array-without-putting-key-and-value-of-object-entries-into

let obj = { a: 1, b: 2, c: 3 };
function keys(obj) {
  return Object.entries(obj).map(([key,values]) => ([key]));
}

console.log("****E1 Answer");
console.log(keys({ a: 1, b: 2, c: 3 })); 

                                  
                                    // Exercise 2
//Write a function called values, which accepts an object and returns an array of all of the values in the object.
// IMPORTANT: Do not use the built in Object.values() function!
// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// values(obj); // [1,2,3]
// let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
// values(obj2); // ["Matt", "Lane", true]
// let obj3 = {};
// values(obj3); // []

let obj2 = { a: 1, b: 2, c: 3 };
function keys2(obj2) {
  return Object.entries(obj2).map(([key,values]) => ([values]));
}

console.log("****E2 Answer");
console.log(keys2({ a: 1, b: 2, c: 3 }));


                                    
                                  // Exercise 3
//Write a function called entries, which accepts an object and returns an array of arrays of key-value pairs.
// In other words, each sub-array is an "entry" in the object with two elements: the first element is the key, and the second element is the value.
// IMPORTANT: Do not use the built in Object.entries() function!
// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// entries(obj);
// [["a",1], ["b",2], ["c",3]]

// let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
// entries(obj2);
// [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]

// let obj3 = {};
// entries(obj3); // []

// maybe somehow combine object.keys or object.values
// object.map is useful to transform data, add brackets?

let obj3 = { a: 1, b: 2, c: 3 };
function entries(obj3) {
   return Object.keys(obj3).map(key => [key, obj3[key]]);
 }

console.log("****E3 Answer");
console.log(entries({ a: 1, b: 2, c: 3 }));



                                  // Exercise 4
//Write a function called pluck, which takes an array of objects and the name of a key.
// The function should return an array containing the value associated with that key for each object, or undefined if that key is not present in the object.
// Examples:
// pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }],'name')
// ["Tim", "Matt", "Elie"]

// pluck([{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],'isBoatOwner')
// [true, false, undefined]

// you will need a function with two parameters (1) array of objects (2) name of key
// get comfortable w dot or bracket notation 


function pluck(arrOfObjects, keyName) {
  let emptyArrOfObjects = [];
  for (let i = 0; i < arrOfObjects.length; i++) {
    emptyArrOfObjects.push(arrOfObjects[i][keyName]);
    //console.log(emptyArrOfObjects);
    // console.log("empty push",emptyArrOfObjects.push(i));
    // console.log("from original array input",arrOfObjects[i][keyName]);
  }
  return emptyArrOfObjects;
}

console.log("****E4 Answer");
console.log(pluck([{ name: "Tim", isBoatOwner: true }],'isBoatOwner'));
console.log(pluck([{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],'isBoatOwner'));


// let object = { name: "Tim", isBoatOwner: true };
// let nameIs = object['name'];
// console.log(nameIs);
// const cat = { hair: "short", fur: "orange"};
// const currentHairLength = cat['hair'];

// maybe will need to create an empty array of objects as well -> assign to return value later on in the code
// iterate through the entire array & if else statement 
// if key exists in array of objects, return [value] of that key 
// if key does not exist in array, return [undefined]
// final output to be returned as an array to emptyArrOfObjects

// function pluck (arr, key) {
//   let output = [];
// for (i = 0; i < arr.length; i++)
//   return output 
//   let item = arr[i];
//   let value = undefined;
//   if (key in item); {
//     value = item[key];
//   } else {
//     value = undefined;
//   }
// return output.push[value]
// }
   
// console.log(pluck([{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],'isBoatOwner'));

// function pluck(arr, key) {
//     let output = [];
//     for (let i = 0; i < arr.length; i++) {
//         let item = arr[i];
//         // is the same as 
//         // let value = key in item ? item[key] : undefined;
//         let value = item[key];
//         output.push(value);
//     }
//     return output;
// }

// console.log(pluck([{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],'isBoatOwner'));
     
// function pluck (arr, key) {
//   // we need to create an array to store 
//   // the new values that we want to return
//   output = [];  
//   // we need to iterate the array in order 
//   // of checking the key and return the
//   // value or values from each item
//   for each item in the arr
//     if key exists in item
//       value = item[key]
//     else
//       value = null
//     end if
//     // we need to store the new value
//     // in the output (our new array)
//     add value to the output

//   end for  

//   // after iterate the array we can
//   // return the output
//   return output

// end function
// }


                                    // Exercise 5
//Write a function called stringFromObject that generates a string from an object's key/value pairs.
// The format should be "key = value, key = value".
// Each key/value pair should be separated by a comma and space except for the last pair.
// Examples:
// stringFromObject({ a: 1, b: '2' });
// "a = 1, b = 2"
// stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false });
// "name = Elie, job = Instructor, isCatOwner = false"
// stringFromObject({}); // ""

// create empty array of object key/value pairs
// create function stringFromObject(changethis) 
//convert object of arrays into a string
// replace : delimiter to = sign
// let myObj = {"lang": "en-us", "episode": 12};

function stringFromObject (obj) {
  let result = "";
    for (let i in obj) {
// you for from ab to a=1 to adding spaces a = 1, b = 2
    result += i + ' = ' + obj[i] + ', ';
  }
  // first adds the quotes, and also removes the last comma using slice method
  return ('"' + result.slice(0, result.length -2) + '"');
}

console.log("****E5 Answer");
console.log(stringFromObject({ a: 1, b: '2' }));
console.log(stringFromObject({"lang": "en-us", "episode": 12}));


//https://stackoverflow.com/questions/61493158/write-a-function-called-stringfromobject-that-generates-a-string-from-an-object


                                  // Exercise 6
//Write a function called minMaxKeyInObject that accepts an object with numeric keys.*
// The function should return an array with the following format: [lowestKey, highestKey]
// Examples:
// minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' });
// [1, 10]
// minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' });
// [1, 4]


// we will need to iterate through this using a for...in loop 
// get the min numeric key and get the max numeric key
// create one variable lowestKey and assign to min numeric key
// create one variable highKey and assign to max numeric key 

function minMaxKeyInObject(array) {
  let lowestKey = Object.keys(array)[0];
  let highKey = Object.keys(array).pop();
  return array = [parseInt(lowestKey), parseInt(highKey)]
}

console.log("****E6 Answer");
console.log(minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' }));
console.log(minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' }));

//https://bobbyhadz.com/blog/javascript-get-last-item-in-object

// function minMaxKeyInObject(array) {
//   let result = "";
//   let lowestKey = "";
//   let highKey = "";
//   for (let i in array) {
//     result += i;
//   return result
//   lowestKey = result[0];
// }
// }
// console.log(minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' }));


