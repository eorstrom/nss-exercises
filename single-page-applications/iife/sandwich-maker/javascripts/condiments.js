// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(sandwich) {
  var condimentPrice = 0;
  // Private variable to store the different condiment prices
  var condimentPrices = {
        "Yellow Mustard": 0.40,
        "Honey Mustard": 0.50,
        "Mayonnaise": 0.65,
        "Ranch": 0.70,
        "Oil and Vinegar": 0.35,
        "No Condiments": 0.00
  };
    console.log("condimentPrices", condimentPrices);
  // Augment the original object with another method
  sandwich.addCondiment = function(userChoice) {
    condimentPrice = condimentPrices.userChoice;
    SandwichMaker.addTopping(condimentPrice);
  };

  sandwich.removeCondiment = function(userChoice) {
    condimentPrice = condimentPrices[userChoice];
    SandwichMaker.removeTopping(condimentPrice);
  }
  // Return the new, augmented object with the new method on it
  return sandwich;
})(SandwichMaker);