var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/* 
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");

var outputToDOM = (function (currentPlanet) {
    el.innerHTML += `<div>${currentPlanet}</div>`; 
});
planets.forEach(outputToDOM);


// Use the map method to create a new array where the first letter of each planet is capitalized

var capitalizedPlanets = planets.map(function (currentPlanet) {
    return currentPlanet.slice(0,1).toUpperCase() + currentPlanet.slice(1);
});

console.log(capitalizedPlanets);

capitalizedPlanets.forEach(outputToDOM);


// Use the filter method to create a new array that contains planets with the letter 'e'

var planetsWithE = capitalizedPlanets.filter(function (currentPlanet) {
    return currentPlanet.indexOf("e") >= 0;
});

planetsWithE.forEach(outputToDOM);


// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
var sentence = words.reduce(function (previousWord, currentWord) {
    return `${previousWord} ${currentWord}`;
});

console.log("sentence", sentence);
document.write(sentence);