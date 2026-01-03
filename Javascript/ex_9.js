/*
JSON strings into JavaScript objects:
JSON.parse()

JavaScript also has a built in function for converting an object into a JSON string:
JSON.stringify()
*/

/*
In JSON, values must be one of the following data types:
a string
a number
an object
an array
a boolean
null

In JavaScript values can be all of the above, plus any other valid JavaScript expression, including:
a function
a date
undefined
*/

// person = {name:"John", age:31, city:"New York"};
/*
The file type for JSON files is ".json"
The MIME type for JSON text is "application/json"
*/

// When receiving data from a web server, the data is always a string.
// Date objects are not allowed in JSON.
// Functions are not allowed in JSON.
// You should avoid using functions in JSON, the functions will lose their scope, and you would have to use eval() to convert them back into functions.

// The JSON.stringify() function will remove any functions from a JavaScript object, both the key and the value:




// window.innerHeight - the inner height of the browser window (in pixels)
// window.innerWidth - the inner width of the browser window (in pixels)
/*
window.open() - open a new window
window.close() - close the current window
window.moveTo() - move the current window
window.resizeTo() - resize the current window
*/

/*
screen.width
screen.height
screen.availWidth
screen.availHeight
screen.colorDepth
screen.pixelDepth
*/

// window.location object can be used to get the current page address (URL) and to redirect the browser to a new page.
/*
window.location.href returns the href (URL) of the current page
window.location.hostname returns the domain name of the web host
window.location.pathname returns the path and filename of the current page
window.location.protocol returns the web protocol used (http: or https:)
window.location.assign() loads a new document
*/

/*
history.back() - same as clicking back in the browser
history.forward() - same as clicking forward in the browser
*/

/*
navigator.cookieEnabled
navigator.appCodeName
navigator.platform
*/

// The window.alert() method can be written without the window prefix.

// When a confirm box pops up, the user will have to click either "OK" or "Cancel" to proceed.
// If the user clicks "OK", the box returns true. If the user clicks "Cancel", the box returns false
/*
if (confirm("Press a button!")) {
  txt = "You pressed OK!";
} else {
  txt = "You pressed Cancel!";
}
*/

// When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value
// let person = prompt("Please enter your name", "Harry Potter");

/*
setTimeout(function, milliseconds)
Executes a function, after waiting a specified number of milliseconds.

setInterval(function, milliseconds)
Same as setTimeout(), but repeats the execution of the function continuously
*/

// The clearTimeout() method stops the execution of the function specified in setTimeout().
// myVar = setTimeout(function, milliseconds);
// clearTimeout(myVar);

// let myVar = setInterval(function, milliseconds);
// clearInterval(myVar);

// cookie
// document.cookie = "username=John Doe";
/*
You can also add an expiry date (in UTC time). By default, the cookie is deleted when the browser is closed:
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
With a path parameter, you can tell the browser what path the cookie belongs to. By default, the cookie belongs to the current page.
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
*/

