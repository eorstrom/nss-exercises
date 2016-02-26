function Vehicle() {
    this.manufacatured_date = Date.now();
    this.make = null;
    this.tires = [];
    this.currentSpeed = 0;
    this.direction = null;
    this.loud = false;
}
Vehicle.prototype.accelerateTo = function (speed) {
    if(speed <= 0 || speed > 300) {
        return;
    }
    this.currentSpeed = speed;
}

Vehicle.prototype.turn = function (whichWay) {
 this.direction = whichWay;
}

Vehicle.prototype.isPlayingMusic = function (isIt) {
 this.loud = isIt;
}

//Create a function named Car with one property named `manufactured_date`

function Truck () {}
Truck.prototype = new Vehicle();

function Van () {}
Van.prototype = new Vehicle();

function Car () {}
Car.prototype = new Vehicle();

Car.prototype.changeManufacturedDate = function (newDate) {
    this.manufacatured_date = newDate;
}

function Tire () {}

function Pirelli () {}
Pirelli.prototype = new Tire();

function PExtreme () {}
PExtreme.prototype - new Pirelli();

/*
  Create a function named Make. 
  Set its prototype to the Car function.
  Define a property `manufacturer` with a default value of empty string.
 */

function Make (maker) {
    this.manufacturer = maker;
}

/*
    Create a function named Model. 
    Set its prototype to the Make function.
    Define a property `modelName` with a default value of empty string.
*/

function Model () {
    this.modelName = "";
}
Model.prototype = new Make();


// Create a new Make object - your favorite one (e.g. Mini)

function Mazda (name) {
    this.modelName = name;
}
Mazda.prototype = new Make("Mazda");

function Mazda3 (name, color) {
    this.name = name;
    this.color = color;
}
Mazda3.prototype = new Mazda("Mazda3");
    
// Create a new Model object of your favorite model (e.g. Clubman)

/*
    Being an avid car collector, you own three different cars all of
    same model from your favorite manufacturer.

    Create three new objects for each of your three favorite cars.
*/

var aNewCar = new Car();

var Tire1 = new Pirelli();
var Tire2 = new Pirelli();
var Tire3 = new Pirelli();
var Tire4 = new Pirelli();

aNewCar.model = Mazda3;
aNewCar.tires.push(Tire1, Tire2, Tire3, Tire4);
console.log("aNewCar", aNewCar);

var mazdaUno = new Mazda3("Spike", "blue");
console.log("mazdaUno", mazdaUno);

var mazdaDos = new Mazda3("Butch", "gray");
console.log("mazdaDos", mazdaDos);

var mazdaTres = new Mazda3("Cassidy", "silver");
console.log("mazdaTres", mazdaTres);

/*
    Being a rich, avid car collector, you own 2 cars from your second
    favorite manufacturer. You also one 1 car from your third favorite
    manufacturer.
*/

function Nissan (name) {
    this.modelName = name;
}
Nissan.prototype = new Make("Nissan Motor Corporation");

function Nissan350Z (name, color) {
    this.name = name;
    this.color = color;
}

var nissanUno = new Nissan350Z("Spike", "blue");
console.log("nissanUno", nissanUno);

var nissanDos = new Nissan350Z("Butch", "gray");
console.log("nissanDos", nissanDos);



function Jeep (name) {
    this.modelName = name;
}
Jeep.prototype = new Make("GM");

function Cherokee(name, color) {
    this.name = name;
    this.color = color;
}
Cherokee.prototype = new Jeep();

var CherokeeUno = new Cherokee("Landon", "Green");
console.log("CherokeeUno", CherokeeUno);