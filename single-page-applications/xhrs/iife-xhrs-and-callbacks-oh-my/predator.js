var Predator = (function () {
  var privateCarnivores = [];

  return {
    loadCarnivores: function (callbackFunction) {
      // Create an XHR to load carnivores
      var loader = new XMLHttpRequest();

      // Listen for when the load event is broadcast
      // and execute an anonymous callback
      loader.addEventListener("load", function () {
        // Set the value of the private array
          privateCarnivores = JSON.parse(this.responseText).carnivores;
          console.log("private Carnivores", privateCarnivores);

          callbackFunction(privateCarnivores);
      });

      loader.open("GET", "carnivores.json");
      loader.send();
    }
  }
})();