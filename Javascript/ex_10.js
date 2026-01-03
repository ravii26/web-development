/*
AJAX is a developer's dream, because you can:

Read data from a web server - after the page has loaded
Update a web page without reloading the page
Send data to a web server - in the background
AJAX just uses a combination of:

A browser built-in XMLHttpRequest object (to request data from a web server)
JavaScript and HTML DOM (to display or use the data)
*/

// The XMLHttpRequest object can be used to exchange data with a web server behind the scenes.
//  This means that it is possible to update parts of a web page, without reloading the whole page.4

// xhttp = new XMLHttpRequest();
// xhttp.onload = function() {
//     // What to do when the response is ready
//   }

/*
To send a request to a server, you can use the open() and send() methods of the XMLHttpRequest object:

xhttp.open("GET", "ajax_info.txt");
xhttp.send();
*/

/*
new XMLHttpRequest()	Creates a new XMLHttpRequest object
abort()	Cancels the current request
getAllResponseHeaders()	Returns header information
getResponseHeader()	Returns specific header information
open(method, url, async, user, psw)	Specifies the request
send()	Sends the request to the server
Used for GET requests
send(string)	Sends the request to the server.
Used for POST requests
setRequestHeader()	Adds a label/value pair to the header to be sent
*/

/*
200: "OK"
403: "Forbidden"
404: "Not Found"
*/

/*
readyState	Holds the status of the XMLHttpRequest.
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready
*/

