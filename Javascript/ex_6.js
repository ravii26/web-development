/*
Hoisting applies to variable declarations and to function declarations.
Because of this, JavaScript functions can be called before they are declared:
 */

/*
Self-Invoking Functions
(function () {
  let x = "Hello!!";  // I will invoke myself
})();
*/

// arguments.length property returns the number of arguments received when the function was invoked:
// missing arguments (less than declared), the missing values are set to undefined
/*
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
*/

/*
JavaScript functions have a built-in object called the arguments object.
x = findMax(1, 123, 500, 115, 44, 88);
function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
*/

/*
// This is a function constructor:
function myFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName  = arg2;
}

// This creates a new object
const myObj = new myFunction("John", "Doe");

// This will return "John"
myObj.firstName;
*/

// call() method
/*
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.call(person1, "Oslo", "Norway");
person.fullName.apply(person1, ["Oslo", "Norway"]);
*/
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.

// When a function is used as a callback, this is lost.
// bind solve this problem
/*
const person = {
  firstName:"John",
  lastName: "Doe",
  display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  }
}

let display = person.display.bind(person);
setTimeout(display, 3000);
*/

// Global variables can be made local (private) with closures.


// CLASS
/*
class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}
*/

// Class Inhertitance
// class declarations are not hoisted
/*
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = myCar.show();
*/

// Static class
// You cannot call a static method on an object, only on an object class.
// If you want to use the myCar object inside the static method, you can send it as a parameter:
/*
class Car {
  constructor(name) {
    this.name = name;
  }
  static hello(x) {
    return "Hello " + x.name;
  }
}
const myCar = new Car("Ford");
document.getElementById("demo").innerHTML = Car.hello(myCar);
*/