// Instructions
// Write a program that will convert a dollar amount 
// to the number of coins that make up the amount. 
// Use the common American coins of quarters, dimes, nickels, and pennies.


//   Input: 0.67
//   Output: {
//     quarters: 2,
//     dimes: 1,
//     nickels: 1,
//     pennies: 2
//   }

// use Do-While loop while changeAmount > 0

function coinCounter (changeAmount) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};
    if (changeAmount > .25) {
        changeAmount = changeAmount - .25;
        coinPurse.quarters += 1;
    };

  coinPurse.quarters = 0;

  return coinPurse;
}

var coins = coinCounter()
console.log();