var sonnetText = document.getElementById("sonnet").innerHTML;
console.log(sonnetText);

// Find and output the starting position of the word "orphans"
var whereIsOrphans = sonnetText.indexOf("orphans");
console.log("WhereIsOrphans", whereIsOrphans);

// Output the number of characters in the sonnet
var sonnetChars = sonnetText.length;
console.log("sonnetText Length", sonnetChars);

// Replace the first occurrence of the string "winter" with "yuletide"
var newPhrase = sonnetText.replace("winter", "yuletide");
console.log("newPhrase", newPhrase);

// Replace all occurrences of the string "the" with "a large"
var newPhraseThe = newPhrase.replace(/the /g, "a large ");
console.log("newPhraseThe", newPhraseThe);

// Set the content of the sonnet 
var newString = document.getElementById("sonnet");
newString.innerHTML = newPhraseThe;