// Placing scripts at the bottom of the <body> element improves the display speed,
// because script interpretation slows down the display
// Scripts can be placed in the <body>, or in the <head> section of an HTML page, or in both

// Way for external script
// <script src="myScript.js"></script>
// <script src="myScript2.js"></script>

// script tag in body will bydefault run but in head tag or external js we have to call functions

// JavaScript can display data
// document.getElementById("demo").innerHTML = 5 + 6;

// A JavaScript program is a list of programming statements

// semicolons are not compalsory but highly recommended

// JavaScript statements can be grouped together in code blocks, inside curly brackets {...}

// Fixed values are called Literals.
// Variable values are called Variables.

// When to Use var, let, or const?
// 1. Always declare variables
// 2. Always use const if the value should not be changed
// 3. Always use const if the type should not be changed (Arrays and Objects)
// 4. Only use let if you can't use const
// 5. Only use var if you MUST support old browsers.

// "equal to" operator is written like == in JavaScript

// A variable declared without a value will have the value undefined

// You cannot re-declare a variable declared with let or const

// If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.

// var has global space where let and const has local space

/*Use const when you declare:
A new Array
A new Object
A new Function
A new RegExp */

// You can change the elements of a constant array
// / You can add an element:

/* 
x = y	x = y
x += y	x = x + y
x -= y	x = x - y
x *= y	x = x * y
x /= y	x = x / y
x %= y	x = x % y
x **= y	x = x ** y
*/

/*
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator
*/

// + can also be used to add (concatenate) strings

/*
&&	logical and
||	logical or
!	logical not
*/

/* 
x &&= y	  x = x && (x = y)
x ||= y	  x = x || (x = y)
x ??= y 	x = x ?? (x = y)
*/

/*
JavaScript has 8 Datatypes
String
Number
Bigint
Boolean
Undefined
Null
Symbol
Object
*/

// JavaScript has dynamic types. This means that the same variable can be used to hold different data types:

// The typeof operator returns the type of a variable or an expression:

// Accessing a function without () returns the function and not the function result

/**
 * // Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
//   this refers to the person object:
};
can add new pair by person.name="Ravi"
 */

// // Create an Object
// const person = new Object();

// Object is basically dictionary
// can we access in 2 ways
// person.age or person["age"]

// can be delete using delete keyword
// delete person.age

// to invoke a function call person.fullName()

/**object in loop
 * 
 * // Build a Text
let text = "";
for (let x in person) {
  text += person[x] + " ";
  //person.x will not work
};

 */

// Object.values() creates an array from the property values

// Object.entries() makes it simple to use objects in loops
/**
 * const fruits = {Bananas:300, Oranges:200, Apples:500};
let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value + "<br>";
}
 */

// You can NOT add a new property to an object constructor
// But you can add new property to object like MyFather

// JavaScript has built-in constructors for all native objects:

/**new Object()   // A new Object object
new Array()    // A new Array object
new Map()      // A new Map object
new Set()      // A new Set object
new Date()     // A new Date object
new RegExp()   // A new RegExp object
new Function() // A new Function object */

// Use pattern literals /()/ instead of new RegExp()

// HTML Events
/**
 * onchange	An HTML element has been changed
onclick	The user clicks an HTML element
onmouseover	The user moves the mouse over an HTML element
onmouseout	The user moves the mouse away from an HTML element
onkeydown	The user pushes a keyboard key
onload	The browser has finished loading the page
 */