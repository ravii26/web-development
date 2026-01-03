// A callback is a function passed as an argument to another function.
// Asynchronous
/*
function myDisplayer(something) {
  document.getElementById("demo").innerHTML = something;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
*/

// Promises
/*
let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)
  myResolve(); // when successful
  myReject();  // when error
});
// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) { /* code if successful  },
  function(error) { /* code if some error  }
);

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;
// The producing code (this may take some time)
  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});
myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
*/

// The keyword async before a function makes the function return a promise:
/*
async function myFunction() {
  return "Hello";
}
Is the same as:

function myFunction() {
  return Promise.resolve("Hello");
}

async function myFunction() {
  return "Hello";
}
myFunction().then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
*/

/*
await keyword can only be used inside an async function
await keyword makes the function pause the execution and wait for a resolved promise before it continues
async function myDisplay() {
  let myPromise = new Promise(function(resolve, reject) {
    resolve("I love You !!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
*/
