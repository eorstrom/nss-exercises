/* Instructions

Create two JSON files. One should contain an array of carnivores, and the other should contain an array of herbivores.
Create an IIFE with the name of Predator.
Predator should have two private arrays to store carnivores and herbivores.
Predator should expose two public functions to load each JSON files and stores the array of animals in the appropriate private array. Each of those functions should accept one argument that will store the callback function to be executed.
In the iife-xhr.js file, define two functions that will be executed after each type of animal is loaded to then display those animals in your DOM. Example given below.
In the Predator IIFE, invoke the callback function, passed in from iife-xhr.js, after each file is loaded.
*/

function listCarnivores (carnivores) {
    // List the carnivores in the DOM 
    var list = document.getElementById("carnivores-list");
    var outputString = "";

    for (var i = 0; i < carnivores.length; i++) {
       var currentCarnivore = carnivores[i];

       // Build up our DOM string
       outputString += `<h1>${currentCarnivore.species}</h1>`;
       outputString += `<h5>${currentCarnivore.locale}</h5>`;
     } 

     list.innerHTML = outputString;
}

function gridCarnivores (carnivores) {
    // List the carnivores in the DOM in a grid
    var grid = document.getElementById("carnivores-grid");
    var outputString = "";

    for (var i = 0; i < carnivores.length; i++) {
       var currentCarnivore = carnivores[i];

       // Build up our DOM string
       outputString += `<div class="carnivores-card">${currentCarnivore.species}</div>`;
     } 

     grid.innerHTML = outputString;
}

function showCarnivores (carnivores) {
    console.log("carnivores", carnivores);
    var el = document.getElementById("carnivores");

    // Empty string to start building up the DOM string
    var output = "";

    // Build up the DOM string for carnivores
    carnivores.forEach(function (currentCarnivore) {
        output += `<h2>${currentCarnivore.species}</h2>`;
        output += `<h4>Located in ${currentCarnivore.locale}</h4>`;
    });

    // Set the innerHTML of the DOM element
    el.innerHTML = output; 
}

function showHerbivores () {

}

Predator.loadCarnivores(showCarnivores);
Predator.loadCarnivores(listCarnivores);
Predator.loadCarnivores(gridCarnivores);