// HTML DOM

// document.getElementById("demo").innerHTML = "Hello World!";
/*
document.getElementsByTagName(name)	Find elements by tag name
document.getElementsByClassName(name)	Find elements by class name
*/

/*
element.innerHTML =  new html content	Change the inner HTML of an element
element.attribute = new value	Change the attribute value of an HTML element
element.style.property = new style	Change the style of an HTML element
Method	Description
element.setAttribute(attribute, value)	Change the attribute value of an HTML element
*/

/*
document.createElement(element)	Create an HTML element
document.removeChild(element)	Remove an HTML element
document.appendChild(element)	Add an HTML element
document.replaceChild(new, old)	Replace an HTML element
document.write(text)	Write into the HTML output stream
*/

// document.getElementById(id).onclick = function(){code}	Adding event handler code to an onclick event

// If you want to find all HTML elements that match a specified CSS selector
// (id, class names, types, attributes, values of attributes, etc), use the querySelectorAll() method
// const x = document.querySelectorAll("p.intro");

// changing value
// document.getElementById("myImage").src = "landscape.jpg";
// In JavaScript, document.write() can be used to write directly to the HTML output stream:

/*
disabled	Specifies that the input element should be disabled
max	Specifies the maximum value of an input element
min	Specifies the minimum value of an input element
pattern	Specifies the value pattern of an input element
required	Specifies that the input field requires an element
type 	Specifies the type of an input element
*/

// document.getElementById("p2").style.color = "blue";
// The onload and onunload events are triggered when the user enters or leaves the page.

// The oninput event is often to some action while the user input data.
// The onchange event is often used in combination with validation of input fields.
// The onmouseover and onmouseout events can be used to trigger a function when the user mouses over, or out of, an HTML element:

// The addEventListener() method attaches an event handler to the specified element.
// document.getElementById("myBtn").addEventListener("click", displayDate);
// Note that you don't use the "on" prefix for the event; use "click" instead of "onclick".

// element.removeEventListener("mousemove", myFunction);

// document.body - The body of the document
// document.documentElement - The full document

// Creating New HTML Elements (Nodes)
/*
<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("div1");
element.appendChild(para);
</script>
*/

// remove
// const elmnt = document.getElementById("p1"); elmnt.remove();
// parent.removeChild(child);

// parent.replaceChild(para, child);

// An HTMLCollection may look like an array, but it is not.

// The querySelectorAll() method returns a static NodeList.
// const myNodeList = document.querySelectorAll("p");

