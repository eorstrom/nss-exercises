// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(sandwich) {
  // Private variable to store the different bread prices
  var breadPrice = 0;
  var breadPrices = {
        "Wheat": 0.60,
        "White": 0.50,
        "Sourdough": 0.70,
        "Rye": 0.65,
        "Gluten-Free": 0.75,
        "No Bread": 0.00
  };
    console.log("breadPrices", breadPrices);
  // Augment the original object with another method
  sandwich.addBread = function(userChoice) {
    breadPrice = breadPrices[userChoice];
    SandwichMaker.addTopping(breadPrice);
  };

  sandwich.removeBread = function() {
    SandwichMaker.removeTopping(breadPrice);
  }

  // Return the new, augmented object with the new method on it
  return sandwich;
})(SandwichMaker);