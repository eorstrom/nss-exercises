// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(sandwich) {
  var veggiePrice = 0;
  // Private variable to store the different veggie prices
  var veggiePrices = {
        "Lettuce": 0.40,
        "Pickles": 0.50,
        "Green Peppers": 0.65,
        "Tomato": 0.70,
        "Cucumber": 0.35,
        "No Veggies": 0.00
  };
    console.log("veggiePrices", veggiePrices);
  // Augment the original object with another method
  sandwich.addVeggie = function(userChoice) {
    veggiePrice = veggiePrices.userChoice;
    SandwichMaker.addTopping(veggiePrice);
  };

  sandwich.removeVeggie = function(userChoice) {
    veggiePrice = veggiePrices[userChoice];
    SandwichMaker.removeTopping(veggiePrice);
  }
  // Return the new, augmented object with the new method on it
  return sandwich;
})(SandwichMaker);