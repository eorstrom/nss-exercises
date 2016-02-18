// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var breadChooser = document.getElementById("bread-chooser");
var sandwichButton = document.getElementById("sandwich-button");
var sandwichOutput = document.getElementById("sandwichOutput");

var meatItems = document.getElementsByClassName("meat");
        console.log("meatItems", meatItems);
var cheeseItems = document.getElementsByClassName("cheese");
        console.log("cheeseItems", cheeseItems);
var veggieItems = document.getElementsByClassName("veggie");
        console.log("veggieItems", veggieItems);
var condimentItems = document.getElementsByClassName("condiment");
        console.log("condimentItems", condimentItems);

sandwichButton.addEventListener("click", function(){
    sandwichOutput.innerHTML = `$${SandwichMaker.getPrice()}`; 
});
/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
breadChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  console.log("selectedTopping", selectedTopping);
  // Determine the price of the topping chosen

  // Add the topping to the SandwichMaker to increase the total price
});

for (var i = 0; i < meatItems.length; i++) {
    currentMeat = meatItems[i];
    currentMeat.addEventListener("click", function(e) {
        console.log("did a thing");
        if (e.currentTarget.checked) {
            SandwichMaker.addMeat(e.currentTarget.value)
        } else if (e.currentTarget.checked == false) {
            SandwichMaker.removeMeat(e.currentTarget.value)
        }
    sandwichOutput.innerHTML = `$${SandwichMaker.getPrice()}`;
    });
}
