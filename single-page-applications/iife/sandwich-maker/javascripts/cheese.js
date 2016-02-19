// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(sandwich) {
  var cheesePrice = 0;
  // Private variable to store the different cheese prices
  var cheesePrices = {
        "American": 0.15,
        "Cheddar": 0.20,
        "Pepper Jack": 0.25,
        "Mozzarella": 0.20,
        "Swiss": 0.25,
        "No Cheese": 0.00
  };
    console.log("cheesePrices", cheesePrices);
  // Augment the original object with another method
  sandwich.addCheese = function(userChoice) {
    cheesePrice = cheesePrices[userChoice];
    SandwichMaker.addTopping(cheesePrice);
  };

  sandwich.removeCheese = function(userChoice) {
    cheesePrice = cheesePrices[userChoice];
    SandwichMaker.removeTopping(cheesePrice);
  }
  // Return the new, augmented object with the new method on it
  return sandwich;
})(SandwichMaker);