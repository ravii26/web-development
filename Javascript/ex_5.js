// The JavaScript prototype property allows you to add new properties to object constructors:
/*
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.nationality = "English";
*/

//  The Object.assign() method copies properties from one or more source objects to a target object.
/*
// Create Target Object
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Create Source Object
const person2 = {firstName: "Anne",lastName: "Smith"};

// Assign Source to Target
Object.assign(person1, person2);
change person 1
*/

// Object.entries() returns an array of the key/value pairs in an object:
/*
const person = {
  firstName : "John",
  lastName : "Doe",
  age : 50,
  eyeColor : "blue"
};

let text = Object.entries(person);
text -->firstName,John,lastName,Doe,age,50,eyeColor,blue

const fruits = {Bananas:300, Oranges:200, Apples:500}; 
let text = "";
for (let [fruit, amount] of Object.entries(fruits)) {
  text += fruit + ": " + amount + "<br>";
}
Object.values() is similar to Object.entries(), but returns a single dimension array of the object values:
The Object.keys() method returns an array with the keys of an object.
*/

// The fromEntries() method creates an object from a list of key/value pairs.
/*
const fruits = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500]
];

const myObj = Object.fromEntries(fruits);
*/

// The Object.groupBy() method groups elements of an object according to string values returned from a callback function.
/*
// Create an Array
const fruits = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

// Callback function to Group Elements
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by Quantity
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

*/

/*
// Adding or changing an object property
Object.defineProperty(object, property, descriptor)

// Adding or changing object properties
Object.defineProperties(object, descriptors)

// Accessing a Property
Object.getOwnPropertyDescriptor(object, property)

// Accessing Properties
Object.getOwnPropertyDescriptors(object)

// Returns all properties as an array
Object.getOwnPropertyNames(object)

// Accessing the prototype
Object.getPrototypeOf(object)

*/

// Object.defineProperty() method can be used to:
// Adding a new property to an object
// Changing property values
// Changing property metadata
// Changing object getters and setters
/*
const person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

// Add a Property
Object.defineProperty(person, "year", {value:"2008"});
*/

/*
All properties have a name. In addition they also have a value.
The value is one of the property's attributes.
Other attributes are: enumerable, configurable, and writable.
These attributes define how the property can be accessed (is it readable?, is it writable?)
In JavaScript, all attributes can be read, but only the value attribute can be changed (and only if the property is writable).
writable : true      // Property value can be changed
enumerable : true    // Property can be enumerated
configurable : true  // Property can be reconfigured
*/

// Get all Properties
// Object.getOwnPropertyNames(person);
// Object.keys() method returns all enumerable properties

// getters
//   get lang() {
// return this.language; }
  
// setters
/*
set lang(lang) {
    this.language = lang;
  }
*/

/*
// Prevents re-assignment
const car = {type:"Fiat", model:"500", color:"white"};

// Prevents adding object properties
Object.preventExtensions(object)

// Returns true if properties can be added to an object
Object.isExtensible(object)

// Prevents adding and deleting object properties
Object.seal(object)

// Returns true if object is sealed
Object.isSealed(object)

// Prevents any changes to an object
Object.freeze(object)

// Returns true if object is frozen
Object.isFrozen(object)
*/
