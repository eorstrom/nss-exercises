"use strict";

let numberInput = $("#number-input");
let addButton = $("#add-button");
let subtractButton = $("#subtract-button");
let multiplyButton = $("#multiply-button");
let divideButton = $("#divide-button");
let squareButton = $("#square-button");
let squareRootButton = $("#square-root-button");
let clickedId;
let numberInputOne, numberInputTwo;

// ADD BUTTON EL
addButton.click(function (event) {
    console.log("addButton was clicked");
    // ParseInt the value of the input to make sure it's a number
    numberInputOne = parseInt(numberInput.val());
    // Clear the input field after capturing the value in a variable (numberInputOne)
    numberInput.val("");
    // Put the cursor back in the input field for user to enter another number
    numberInput.focus();
    console.log("numberInputOne", numberInputOne);  
    // Saves the ID of the addButton into a global variable 
    clickedId = event.currentTarget.id;  
});

// SUBTRACT BUTTON EL
subtractButton.click(function (event) {
    console.log("subtractButton was clicked");
    numberInputOne = parseInt(numberInput.val());
    numberInput.val("");
    numberInput.focus();
    console.log("numberInputOne", numberInputOne);
    // Saves the ID of the subtractButton into a global variable
    clickedId = event.currentTarget.id;    
});

// MULTIPLY BUTTON EL
multiplyButton.click(function (event) {
    console.log("multiplyButton was clicked");
    numberInputOne = parseInt(numberInput.val());
    numberInput.val("");
    numberInput.focus();
    console.log("numberInputOne", numberInputOne);
    // Saves the ID of the multiplyButton into a global variable
    clickedId = event.currentTarget.id;    
});

// DIVIDE BUTTON EL
divideButton.click(function (event) {
    console.log("divideButton was clicked");
    numberInputOne = parseInt(numberInput.val());
    numberInput.val("");
    numberInput.focus();
    console.log("numberInputOne", numberInputOne);
    // Saves the ID of the divideButton into a global variable
    clickedId = event.currentTarget.id;    
});

// KEYPRESS EL
numberInput.keypress(function (event) {
    if (numberInputOne !== "") {
        if (event.keyCode === 13) {
            numberInputTwo = parseInt(numberInput.val());
            console.log("numberInputTwo", numberInputTwo);
            switch (true) {
                case (clickedId === "add-button"):
                    numberInput.val("The sum is: " + add(numberInputOne, numberInputTwo));
                    break;

                case (clickedId === "subtract-button"):
                    numberInput.val("The difference is: " + subtract(numberInputOne, numberInputTwo));
                    break;

                case (clickedId === "multiply-button"):
                    numberInput.val("The product is: " + multiply(numberInputOne, numberInputTwo));
                    break;

                case (clickedId === "divide-button"):
                    numberInput.val("The quotient is: " + divide(numberInputOne, numberInputTwo));
                    break;
            }
        // numberInput.val("");
        }
    }
});

// SQUARE BUTTON EL
squareButton.click(function (event) {
    console.log("squareButton was clicked");
    numberInputOne = parseInt(numberInput.val());
    numberInput.val("");
    numberInput.focus();
    console.log("numberInputOne", numberInputOne);
    clickedId = event.currentTarget.id; 
    numberInput.val("The square of " + numberInputOne + " is: " + square(numberInputOne));   
});

// SQUARE ROOT BUTTON EL
squareRootButton.click(function (event) {
    console.log("squareRootButton was clicked");
    numberInputOne = parseInt(numberInput.val());
    numberInput.val("");
    numberInput.focus();
    console.log("numberInputOne", numberInputOne);
    clickedId = event.currentTarget.id; 
    numberInput.val("The square root of " + numberInputOne + " is: " + squareRoot(numberInputOne));   
});
