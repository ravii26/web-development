/**A JavaScript Set is a collection of unique values.
Each value can only occur once in a Set.
Sets are objects
The values can be of any type, primitive values or objects */

// const letters = new Set(["a","b","c"]);
// letters.add("r");
// answer = letters.has("d");
// Get all Values
// const myIterator = letters.values();
// Get all Values
// const myIterator = letters.values();
// The entries() method returns an Iterator with [value,value] pairs from a Set.

/**A Map holds key-value pairs where the keys can be any datatype.
A Map remembers the original insertion order of the keys. */
/* Create a Map
const fruits = new Map();
// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
fruits.get("apples");    // Returns 500
fruits.size;
fruits.delete("apples");
fruits.clear();
fruits.has("apples");
*/

// The instanceof operator returns true if an object is an instance of a specified object type:

// The global method Number() converts a variable (or a value) into a number.

/* Create an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
  };
  // Destructuring
  let {firstName, lastName} = person; */

/*// Create an Array
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
// Destructuring
let [fruit1,,,fruit2] = fruits;
const [a,b, ...rest] = numbers
 */

// RegExpression
// /abc/i -- for case insensitive
/*
/[123]/.test("1") returns true
*/

/**try {
    if(x.trim() == "") throw "is empty"; -->throw custom error
    if(isNaN(x)) throw "is not a number";
    x = Number(x);
    if(x > 10) throw "is too high";
    if(x < 5) throw "is too low";
  }
  catch(err) {
    message.innerHTML = "Error: " + err + ".";
  }
  finally {
    document.getElementById("demo").value = "";
  } */

// Then, use the JavaScript built-in function JSON.parse() to convert the string into a JavaScript object:
//JSON.parse(text)
// JSON.stringify(obj)
// The "use strict" directive was new in ECMAScript version 5.
// It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.
// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
// With strict mode, you can not, for example, use undeclared variables.

// With Arrow Function:
// hello = () => {
//   return "Hello World!";
// }

/*
const person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person2 = {
  firstName:"John",
  lastName: "Doe",
}
// Return "John Doe":
person1.fullName.call(person2);
*/

/*
const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}
let fullName = person.fullName.bind(member);
*/

// With arrow functions the this keyword always represents the object that defined the arrow function.
/*
Arrow Function With Parameters:
hello = (val) => "Hello " + val;
*/

// In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.
// With arrow functions the this keyword always represents the object that defined the arrow function.

/*
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);
*/

// import export
/*
message.js

const message = () => {
const name = "Jesse";
const age = 40;
return name + ' is ' + age + 'years old.';
};

export default message;

import message from "./message.js";
*/

/*
class Hello {
  #counter = 0;  // Private field
  #myMethod() {} // Private method
}
const myClass = new Hello();

let x = myClass.#counter; // Error
myClass.#myMethod();      // Error
*/

/*
const fruits = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

// Callback function to select low volumes 
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by ok and low
const result = Object.groupBy(fruits, myCallback);

// Display Results
let text ="These fruits are Ok: <br>";
for (let [x,y] of result.ok.entries()) {
  text += y.name + " " + y.quantity + "<br>";
}

text += "<br>These fruits are low: <br>";
for (let [x,y] of result.low.entries()) {
  text += y.name + " " + y.quantity + "<br>";
}

document.getElementById("demo").innerHTML = text;
*/