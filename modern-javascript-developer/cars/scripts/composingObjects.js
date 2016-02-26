function Vehicle () {
  this.manufactured_date = Date.now();
  this.model = null;
  this.tires = [];
  this.axles = 0;
  this.currentSpeed = 0;
  this.direction = null;
  this.loud = false;
}
Vehicle.prototype.accelerateTo = function (speed) {
  if (speed <= 0 || speed > 300) {
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



function Truck () {
  this.shotgunRack = false;
  this.bedSize = 0;
}
Truck.prototype = new Vehicle();

function Semi () {
  this.trailerType = null;
}
Semi.prototype = new Vehicle();

function Motorcycle () {
  this.handlebarType = null;
}
Motorcycle.prototype = new Vehicle();

function Tricycles () {}
Tricycles.prototype = new Vehicle();

function Van () {}
Van.prototype = new Vehicle();

function Car () {}
Car.prototype = new Vehicle();

Car.prototype.changeManufacturedDate = function (newDate) {
  this.manufactured_date = newDate;
};






function Tire () {}

function Pirelli () {}
Pirelli.prototype = new Tire();

function PExtreme () {}
PExtreme.prototype = new Pirelli();
function PExtreme55 () {}
PExtreme55.prototype = new Pirelli();


function PAwesome () {}
PAwesome.prototype = new Pirelli();







/*
  Make is-a Car
 */
function Make (maker) {
  this.manufacturer = maker;
}

/*
  Chevrolet is-a Make
 */
function Chevrolet (name) {
  this.modelName = name;
}
Chevrolet.prototype = new Make("GM");

/*
  Camaro is-a Chevrolet
 */
function Camaro () {

}
Camaro.prototype = new Chevrolet("Camaro");



// Build a truck
var aTruck = new Truck();
aTruck.axles = 2;
console.log("aTruck", aTruck);

// Build a motorcycle
var aMotorcycle = new Motorcycle();
var AwesomeTire1 = new PAwesome();
var AwesomeTire2 = new PAwesome();
aMotorcycle.tires.push(AwesomeTire1, AwesomeTire2);

console.log("aMotorcycle", aMotorcycle);



// Build a car
var aNewCar = new Car();
var Bumblebee = new Camaro();

var Tire1 = new PExtreme();
var Tire2 = new PExtreme();
var Tire3 = new PExtreme55();
var Tire4 = new PExtreme55();



aNewCar.model = Bumblebee;
aNewCar.tires.push(Tire1, Tire2, Tire3, Tire4);

console.log("aNewCar",aNewCar);