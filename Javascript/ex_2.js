// String

// (`This is a template string`).
// Templates(`) allow single and double quotes inside a string

// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = text.length;

// The backslash escape character (\) turns special characters into string character

// let char = text.charAt(0);
// let char = text.charCodeAt(0);
// let letter = name.at(2);
// you can use negative index in at() method rather than chatAt()
// let part = text.slice(7, 13);
// let part = text.slice(-12, -6);
// substr() is similar to slice() but second parameter is lenght of string
// let text2 = text1.toUpperCase();
// let text2 = text1.toLowerCase();  /
// let text3 = text1.concat(" ", text2);  can work like let text3 = text1.concat(" ", text2);
// The trim() method removes whitespace from both sides of a string:
// The trimStart() method works like trim(), but removes whitespace only from the start of a string.
// The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
// The padStart() method pads a string from the start.
// It pads a string with another string (multiple times) until it reaches a given length
// The padEnd() method pads a string from the end
// let text = "Hello world!";
// let result = text.repeat(2) will print text two times
// let newText = text.replace("Microsoft", "W3Schools");
// The replace() method replaces only the first match
// text = text.replaceAll("cats","dogs");
// text.split(",")    // Split on commas and returns array
// let index = text.indexOf("locate");
// let index = text.lastIndexOf("locate");
// Both methods accept a second parameter as the starting position for the search:
// The match() method returns an array containing the results of matching a string against a string (or a regular expression).
// The includes() method returns true if a string contains a specified value.
// text.includes("world");
// text.startsWith("world")
// The startsWith() method returns true if a string begins with a specified value.
// The endsWith() method returns true if a string ends with a specified value.

// let text = `Welcome ${firstName}, ${lastName}!`;
// Template Strings allow variables in strings:
// JavaScript will try to convert strings to numbers in all numeric operations:
// NaN is a JavaScript reserved word indicating that a number is not a legal number.
// You can use the global JavaScript function isNaN() to find out if a value is a not a number:
// NaN is a number: typeof NaN returns number:
// Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.
// But you can use the toString() method to output numbers from base 2 to base 36.
// myNumber.toString(32);
// To create a BigInt, append n to the end of an integer or call BigInt():
// The Number.isInteger() method returns true if the argument is an integer.
// The toString() method returns a number as a string.
// toExponential() returns a string, with a number rounded and written using exponential notation.
// toFixed() returns a string, with the number written with a specified number of decimals:
// let x = 9.656;
// x.toFixed(0);  output--10
// toPrecision() returns a string, with a number written with a specified length:
// valueOf() returns value of string
// All JavaScript data types have a valueOf() and a toString() method.
/**Number()	Returns a number converted from its argument.
parseFloat()	Parses its argument and returns a floating point number
parseInt()	Parses its argument and returns a whole number */
// The Date() method returns the number of milliseconds since 1.1.1970.
// parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
// The Number.isInteger() method returns true if the argument is an integer.
// NaN is a JavaScript reserved word for a number that is not a legal number.
// Use all these by Number.EPSILON
/**EPSILON	The difference between 1 and the smallest number > 1.
MAX_VALUE	The largest number possible in JavaScript
MIN_VALUE	The smallest number possible in JavaScript
MAX_SAFE_INTEGER	The maximum safe integer (253 - 1)
MIN_SAFE_INTEGER	The minimum safe integer -(253 - 1)
POSITIVE_INFINITY	Infinity (returned on overflow)
NEGATIVE_INFINITY	Negative infinity (returned on overflow) */




// ARRAY

// const cars = ["Saab", "Volvo", "BMW"];
// let car = cars[0];
// you can have variables of different types in the same Array
// The length property of an array returns the length of an array (the number of array elements).
// cars.length
// You can also use the Array.forEach() function:
// fruits.push("Lemon");  // Adds a new element (Lemon) to fruits
// Adding elements with high indexes can create undefined "holes" in an array:
// a new method Array.isArray()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.at(2);
// let fruit = fruits[2];
// The join() method also joins all array elements into a string
// fruits.join(" * ");
// The pop() method removes the last element from an array:
// fruits.pop();
// The pop() method returns the value that was "popped out":
// The push() method returns the new array length:
// The shift() method removes the first array element and "shifts" all other elements to a lower index.
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
// delete fruits[0];
// Using delete() leaves undefined holes in the array.
/**const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys); */
// The copyWithin() method copies array elements to another position in an array:
// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();  --> 1,2,3,4,5,6
// The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
// const newArr = myArr.flatMap(x => [x, x * 10]);
// The splice() method can be used to add new items to an array:
/**The first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed.
The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added */
// The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array
// const spliced = months.toSpliced(0, 1);
// The slice() method slices out a piece of an array into a new array:

// indexOf() method searches an array for an element value and returns its position  -->fruits.indexOf("Apple")
//returns -1 if the item is not found
// fruits.lastIndexOf("Apple")
// fruits.includes("Mango"); // is true

// fruits.sort();
// fruits.reverse();
// points.sort(function(a, b){return a - b});

// Math.min.apply(null, [1, 2, 3]) is equivalent to Math.min(1, 2, 3)

/**
 * const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "<br>";
}
 */

/**
 * const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
 */

/**const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
} */

/**const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
return total + value;
}
The total (the initial value / previously returned value) */

// every() method checks if all array values pass a test
// returns true or false
/**const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
} */

//    some() method checks if some array values pass a test
/**let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
} */

//  Array.from() method returns an Array object from any object with a length property or any iterable object
// Array.from("ABCDEFG");

// Array.keys() method returns an Array Iterator object with the keys of an array
// Basically index

/**The entries() method returns an Array Iterator object with key/value pairs:

[0, "Banana"]
[1, "Orange"]
[2, "Apple"]
[3, "Mango"] */

// Spread
/**const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4]; */