// Credits & Source: http://www.newthinktank.com/2015/09/learn-javascript-one-video/ from https://www.youtube.com/watch?v=fju9ii8YsGs

<!-- ---------- CHANGING ELEMENTS & EVENT HANDLING ---------- -->
<!-- All the events can be found here http://www.w3schools.com/jsref/dom_obj_event.asp -->
 
<!-- Open alert on click -->
<a href="JavaScript:void(0)" onClick="alert('Hello');">Say Hello</a><br />
 
<!-- Call a function on click -->
<a href="JavaScript:void(0)" onClick="openAlert('Hi how are you');">Say Something</a><br />
 
<!-- Change text color on mouse rollover and roll out-->
<a href="JavaScript:void(0)" onmouseover="this.style.color='red';"
onmouseout="this.style.color='blue';"
ondblclick="this.text='You Double Clicked Me'"
onmousedown="this.text='Don\'t Press So hard'"
onmouseup="this.text='Thank You'">Make me Red</a><br />
 
<!-- Get value in an input element and open alert on change -->
<input type="text" id="randInput"
onChange="var dataEntered=document.getElementById('randInput').value; alert('User Typed ' + dataEntered);"><br /><br />
 
<!-- When a user clicks a key provide info on the key clicked -->
<form action="#" id="sampForm">
<input id='charInput' type="text">
<p id="keyData">Key Data Here</p>
<input type="submit" value="Submit">
<input type="reset" value="Reset">
</form><br /><br />
 
<img src="ntt-logo.png" id="logo">
<button id="logoButton">Get Logo</button><br />
<input id='mouseInput' type="text" size="30"><br />
 
Mouse X: <input type="text" id="mouseX"><br />
Mouse Y: <input type="text" id="mouseY"><br />
 
<button id="clearInputs">Clear Inputs</button><br />
 
<script>
 
function getChar(event) {
 
  // event.which returns the key or mouse button clicked
  if (event.which == null) {
 
    // Return the char if not a special character
    return String.fromCharCode(event.keyCode); // IE
  } else if (event.which!=0 && event.charCode!=0) {
    return String.fromCharCode(event.which);   // Other Browsers
  } else {
    return null; // Special Key Clicked
  }
}
 
document.getElementById('charInput').onkeypress = function(event) {
  var char = getChar(event || window.event)
  if (!char) return false; // Special Key Clicked
 
  document.getElementById('keyData').innerHTML = char + " was clicked";
  return true;
}
 
// Change text when the input gains focus
document.getElementById('charInput').onfocus = function(event) {
  document.getElementById('keyData').innerHTML = "Input Gained Focus";
}
 
// Change text when the input loses focus
document.getElementById('charInput').onblur = function(event) {
  document.getElementById('keyData').innerHTML = "Input Lost Focus";
}
 
// Change text when text is selected
document.getElementById('charInput').onselect = function(event) {
  document.getElementById('keyData').innerHTML = "Text Selected";
}
 
// Add a listener that triggers a function on browser resize
window.addEventListener("resize", browserResized);
 
function browserResized() {
  document.getElementById('keyData').innerHTML = "I've been resized";
}
 
// Make image invisible on click
document.getElementById('logo').onclick = function(event) {
 
  // Change the class for the image
  document.getElementById('logo').className = "hidden";
 
  // Change the input element value
  document.getElementById('mouseInput').value = "Clicked on image with button " + event.button;
}
 
// Make image visible on click
document.getElementById('logoButton').onclick = function(event) {
  document.getElementById('logo').className = "show";
}
 
// Change image src on mouseover
document.getElementById('logo').onmouseover = function(event) {
  document.getElementById('logo').src = "ntt-logo-horz.png";
  document.getElementById('mouseInput').value = "Mouse Over image";
}
 
// Change image src back on mouseout
document.getElementById('logo').onmouseout = function(event) {
  document.getElementById('logo').src = "ntt-logo.png";
  document.getElementById('mouseInput').value = "Mouse Left image";
}
 
// Get mouse x y coordinates
document.body.onmousemove = function(e) {
    e = e || window.event;
 
    // Get pageX, pageY : Mouse position relative to the html doc
    var pageX = e.pageX;
    var pageY = e.pageY;
    if (pageX === undefined) {
 
        // clientX, clientY : Mouse position relative to the browsers viewport
        // scrollLeft, scrollTop : Pixels an element is scrolled left or
        // from the top
        pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
 
    document.getElementById('mouseX').value = pageX;
    document.getElementById('mouseY').value = pageY;
};
 
// Clear all input elements
document.getElementById('clearInputs').onclick = function(event) {
  var inputElements = document.getElementsByTagName('input');
 
  for (var i = 0; i < inputElements.length; i++) {
  if (inputElements[i].type == "text") {
    inputElements[i].value = "";
  }
}
}
 
 
// Change background image
document.getElementById('chgBkImg').onclick = function(event) {
  document.getElementById('sampDiv').style.backgroundImage = "url('repeatBkgrnd.png')";
}
 
// Change site on button click
document.getElementById('goToGoogle').onclick = function(event) {
  window.location.href = "http://google.com";
  // OR
  // window.location.assign("http://google.com");
}