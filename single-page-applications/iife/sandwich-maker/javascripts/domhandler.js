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
    sandwichOutput.innerHTML = `<h4>Final Price: </h4>$${SandwichMaker.getPrice()}`; 
});
/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
breadChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
    SandwichMaker.removeBread();
    SandwichMaker.addBread(event.currentTarget.value);
  // Determine the price of the topping chosen  
  // Add the topping to the SandwichMaker to increase the total price
    sandwichOutput.innerHTML = `<h4>Final Price: </h4>$${SandwichMaker.getPrice()}`;
});

// Iterating through meatItems
for (var i = 0; i < meatItems.length; i++) {
    currentMeat = meatItems[i];
    currentMeat.addEventListener("click", function(e) {
        console.log("did a thing");
        if (e.currentTarget.checked) {
            SandwichMaker.addMeat(e.currentTarget.value)
        } else if (e.currentTarget.checked == false) {
            SandwichMaker.removeMeat(e.currentTarget.value)
        }
    sandwichOutput.innerHTML = `<h4>Final Price: </h4>$${SandwichMaker.getPrice()}`;
    });
}
// Iterating through cheeseItems
for (var i = 0; i < cheeseItems.length; i++) {
    currentCheese = cheeseItems[i];
    currentCheese.addEventListener("click", function(e) {
        console.log("did a thing");
        if (e.currentTarget.checked) {
            SandwichMaker.addCheese(e.currentTarget.value)
        } else if (e.currentTarget.checked == false) {
            SandwichMaker.removeCheese(e.currentTarget.value)
        }
    sandwichOutput.innerHTML = `<h4>Final Price: </h4>$${SandwichMaker.getPrice()}`;
    });
}
// Iterating through veggieItems
for (var i = 0; i < veggieItems.length; i++) {
    currentVeggie = veggieItems[i];
    currentVeggie.addEventListener("click", function(e) {
        console.log("did a thing");
        if (e.currentTarget.checked) {
            SandwichMaker.addVeggie(e.currentTarget.value)
        } else if (e.currentTarget.checked == false) {
            SandwichMaker.removeVeggie(e.currentTarget.value)
        }
    sandwichOutput.innerHTML = `<h4>Final Price: </h4>$${SandwichMaker.getPrice()}`;
    });
}
// Iterating through condimentItems
for (var i = 0; i < condimentItems.length; i++) {
    currentCondiment = condimentItems[i];
    currentCondiment.addEventListener("click", function(e) {
        console.log("did a thing");
        if (e.currentTarget.checked) {
            SandwichMaker.addCondiment(e.currentTarget.value)
        } else if (e.currentTarget.checked == false) {
            SandwichMaker.removeCondiment(e.currentTarget.value)
        }
    sandwichOutput.innerHTML = `<h4>Final Price: </h4>$${SandwichMaker.getPrice()}`;
    });
}
