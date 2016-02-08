/* Instructions

Create an HTML file that has two input fields to accept the two numbers to perform operations on.
Create 4 buttons to perform each of the basic mathematical functions (add, subtract, multiply, divide).
In your JavaScript, put an event listener on each of the buttons.
Copy the code below and implement a basic calculator.
When the user performs one of the operations, output the result to another DOM element of your choice.
*/

// Input Variables
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
// Button Variables
var addButton = document.getElementById("add");
var subtractButton = document.getElementById("subtract");
var multiplyButton = document.getElementById("multiply");
var divideButton = document.getElementById("divide");
// Variable to output results to DOM
var result = document.getElementById("output");;

// Create a function that adds two numbers passed in as arguments. Return the sum.
function addNums(number1, number2) {
  var sum = (number1+number2);
  console.log("numbers", number1, number2);
  console.log("sum", sum);
  return `The sum is: ${sum}`; 
};

// Create a function that subtracts two numbers passed in as arguments. Return the difference.
function subtractNums(number1, number2) {
  var difference = (number1-number2);
  console.log("numbers", number1, number2);
  console.log("difference", difference);
  return `The difference is: ${difference}`; 
};

// Create a function that multiplies two numbers passed in as arguments. Return the product.
function multiplyNums(number1, number2) {
  var product = (number1*number2);
  console.log("numbers", number1, number2);
  console.log("product", product); 
  return `The product is: ${product}`;
};

// Create a function that divides two numbers passed in as arguments. Return the quotient.
function divideNums(number1, number2) {
  var quotient = (number1/number2);
  console.log("numbers", number1, number2);
  console.log("quotient", quotient);
  return `The quotient is: ${quotient}`; 
};

document.getElementById("buttons").addEventListener("click", function(event) {
  var operation;
  var number1 = parseInt(num1.value);
  var number2 = parseInt(num2.value);
  
  switch (event.target.id) {
    case ("add"):
    operation = addNums;
    console.log("event.target.id", event.target.id);
    break;

    case ("subtract"):
    operation = subtractNums;
    break;

    case ("multiply"):
    operation = multiplyNums;
    break;

    case ("divide"):
    operation = divideNums;
    break;

    default: 
    console.log("Something went wrong.");
  }
  mathOperation(operation, number1, number2);
});

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them
  Return the value of the operation.
 */

function mathOperation(operation, num1, num2)  {
  console.log(operation, num1, num2);
  result.innerHTML = operation(num1, num2);
}