// new Date() creates a date object with the current date and time
// const d=new Date()

// JavaScript counts months from 0 to 11
// year, month, day, hour, minute, second
// const d = new Date(100000000000);
// 01 January 1970 plus 100 000 000 000 milliseconds
// d.toString();
// d.toDateString();
// const d = new Date("03/25/2015")
// Short dates are written with an "MM/DD/YYYY" syntax like this
// Long dates are most often written with a "MMM DD YYYY" syntax like this
// If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.

/**getFullYear()	Get year as a four digit number (yyyy)
getMonth()	Get month as a number (0-11)
getDate()	Get day as a number (1-31)
getDay()	Get weekday as a number (0-6)
getHours()	Get hour (0-23)
getMinutes()	Get minute (0-59)
getSeconds()	Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	Get time (milliseconds since January 1, 1970)
d.getMonth()
getTimezoneOffset() method returns the difference (in minutes) between local time an UTC time*/

/**setDate()	Set the day as a number (1-31)
setFullYear()	Set the year (optionally month and day)
setHours()	Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()	Set the minutes (0-59)
setMonth()	Set the month (0-11)
setSeconds()	Set the seconds (0-59)
setTime()	Set the time (milliseconds since January 1, 1970) */

// MATH
/**Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E */

/**
 * Math.round(x)	Returns x rounded to its nearest integer
Math.ceil(x)	Returns x rounded up to its nearest integer
Math.floor(x)	Returns x rounded down to its nearest integer
Math.trunc(x)	Returns the integer part of x (new in ES6)
Math.pow(8, 2);
Math.sqrt(6)
Math.abs(4.2)
Math.sin(90 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)*/

/**Math.min(0, 150, 30, 20, -8, -200);
 * Math.max(0, 150, 30, 20, -8, -200);
 * Math.random(); returns 0 to 1
 * Math.log(1);
 * Math.log2(1);
 * Math.log10(1);
 */

// let x = "";
// Boolean(x);

// Conditional operator
// let voteable = (age < 18) ? "Too young":"Old enough";

/**if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
} */

/**let x = "0";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
} */

/**for (let i = 0; i < 5; i++) {
text += "The number is " + i + "<br>";
} */

/**
 * const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}
for in loop returns index or key
 */

/**const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}
for of loop returnns values */

/**while (i < 10) {
  text += "The number is " + i;
  i++;
} */

/**
 * do {
text += "The number is " + i;
i++;
}
while (i < 10);
 */

