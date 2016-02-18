// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(sandwich) {
  var meatPrice = 0;
  // Private variable to store the different meat prices
  var meatPrices= {
        "Ham": 0.40,
        "Honey Ham": 0.50,
        "Turkey": 0.65,
        "Chicken": 0.70,
        "Salami": 0.35,
        "No Meat": 0.00
  };
  console.log("meatPrices", meatPrices);
  // Augment the original object with another method
  sandwich.addMeat = function(userChoice) {
    meatPrice = meatPrices[userChoice];
    SandwichMaker.addTopping(meatPrice);
  };

  sandwich.removeMeat = function(userChoice) {
    meatPrice = meatPrices[userChoice];
    SandwichMaker.removeTopping(meatPrice);
  }
  // Return the new, augmented object with the new method on it
  return sandwich;
})(SandwichMaker);