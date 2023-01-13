//https://javascript.info/object#tasks

//TASK1
console.log("                                                   TASK_1 Hello Object");
let user = {     // an object
  name: "John",  // by key "name" store value "John"
  surname: "Smith"        
};

console.log("First Values");
console.log(user);

console.log("Name Updated to Pete");
user.name = "Pete";
console.log(user);

console.log("Key Name Removed");
delete user.name;
console.log(user);

//TASK 2
console.log("                                                   TASK_2 Check For Emptiness");

function isEmpty(obj) {
    console.log(Object.keys(obj)); // returns empty array
    if (Object.keys(obj).length == 0) {
        return true; 
     }else{
        return false;
        }
    }

console.log(isEmpty({}));
console.log(isEmpty(["testing"]));

//TASK 3
console.log("                                                   TASK_3 Sum Object Properties");

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

console.log(sum);

//TASK 4
console.log("                                                   TASK_4 Multiply Numeric Property Values by 2");

function multiplyNumeric(obj) {
  for(let key in obj) {
  if(typeof(obj[key]) == 'number'){
  obj[key] *= 2
  }
  }
  return obj
  }

  