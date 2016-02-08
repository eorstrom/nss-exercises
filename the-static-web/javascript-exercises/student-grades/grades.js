// Loop over an array of student grades (values from 50-100) 
//  and outputs how many of each grades there are.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A
// Start with array of random scores in your JavaScript

// var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
// Use console.log to output the following criteria:

// How many of each grade?
// What is the lowest grade?
// What is the highest grade?


var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var As = 0;
var Bs = 0;
var Cs = 0;
var Ds = 0;
var Fs = 0;

var highest = 0;
var lowest = 100;

// make a switch statement
// for (var i = 0; i < scores.length; i++) {
//     if (scores[i] > 90) {
//         As += 1;
//     } else (scores[i] )
// }

for (var i = 0; i < scores.length; i++) {
    // console.log(scores[i]);
    switch (true) {
        case (scores[i] > 90):
            As += 1;
            break;
        case scores[i] > 80:
            Bs += 1;
            break;
        case scores[i] > 70:
            Cs += 1;
            break; 
        case scores[i] > 60:
            Ds += 1;
            break;
        default:
            Fs += 1;
            break;      
    }
}

console.log("As: ", As);
console.log("Bs: ", Bs);
console.log("Cs: ", Cs);
console.log("Ds: ", Ds);
console.log("Fs: ", Fs);

var sortedScores = scores.sort();
lowest = scores[0];
highest = scores[scores.length-1];
console.log("Highest Score: ", highest); 
console.log("Lowest Score: ", lowest);
console.log(sortedScores, "Number of Grades: ", sortedScores.length); 




