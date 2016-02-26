/* Instructions

1. Copy the code below into the JavaScript file
8. The output of each of the functions should immediately appear as well.
*/

var stringInput = document.getElementById("string-input");
var stringValue = "";
var testString = "";
var submitButton = document.getElementById("submit");
var reverseButton = document.getElementById("reverse");
var alphabitsButton = document.getElementById("alphabits");
var stringOutput = document.getElementById("output");
var splitString;

// 3. The text input should only accept letters. No numbers.
stringInput.addEventListener("keypress", function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /[0-9]|\./;
        if ( regex.test(key) ) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
        }
});

// 7. When the user presses the enter key in the text input, or clicks the button, set the value of the testString variable (see below) to the value of the input.
stringInput.addEventListener("keypress", function(event) {
   if (event.keyCode === 13) {
        testString = stringInput.value;    
        console.log("testString", testString); 
    }
});


/*
4. Implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.
6. Implement the logic in the palindrome function that determine whether the string is a palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below the text input.
*/
reverseButton.addEventListener("click", function() {
    stringValue = stringInput.value; 
    stringOutput.innerHTML = stringValue.split('').reverse().join('');
    var reverseStringValue = stringValue.split('').reverse().join(''); 
    if (stringValue === reverseStringValue) {
        stringOutput.innerHTML += "<p>Your string is a palidrome</p>";
    }
    console.log("reverse button was clicked");
});

// 5. Implement the logic in the alphabits function that return the characters in alphabetical order, and outputs the result in the DOM, below the text input.
alphabitsButton.addEventListener("click", function() {
    stringValue = stringInput.value; 
    stringOutput.innerHTML = stringValue.split('').sort().join('');
    console.log("alphabits button was clicked");
});

/*
reversal(testString);
alphabits(testString);
palindrome(testString);
*/