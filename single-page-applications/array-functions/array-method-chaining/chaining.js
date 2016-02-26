/*
Using one single line of JavaScript code, complete the following tasks on the array of integers below.
*/

// starting integer array
var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
var newIntArray = [];
var mathDoneArray = [];


// Sort the numbers in descending order (10, 9, 8, 7, etc).
    var sortIntegers = integers.sort(function(first, second) { return second - first; });
    console.log("sortIntegers", sortIntegers);

// Remove any integers greater than 19.
    function filterIntegers(value) {
        if (value <= 19) {
            return value;
        }
    };

var filteredIntegers = sortIntegers.filter(filterIntegers);
console.log("filteredIntegers", filteredIntegers);

// Multiply each remaining number by 1.5 and then subtract 1.

    function mathIntegers(arr) {
        arr.forEach(function(currentItem){
            mathDoneArray.push((currentItem * 1.5) - 1);
        });
    };

mathIntegers(filteredIntegers);
console.log("mathDoneArray", mathDoneArray);

var total = mathDoneArray.reduce(function(a, b) { return a + b; }, 0);

// Then output (either in the DOM or the console) the sum of all the resulting numbers. 
console.log("sum", total);
document.write(total);



    // still doesn't work
    // integers = integers.sort(function(first, second) { return second - first; }).filter(filterIntegers).forEach(mathIntegers(integers)).reduce(function(a, b) { return a + b; }, 0);

    // console.log("integers", integers);