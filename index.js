'use strict';


const Vehicle = require('./objects/vehicle-constructor.js');
const flyingVehicle = require('./objects/flyingStuff/flyingVehicle');
const seaCreature = require('./objects/seaStuff/Lobster');
// const Vehicle = require('./class.js');
// const Vehicle = require('./factory.js');

// Implement a car and motorcycle
const mazda = new Vehicle.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new Vehicle.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());


//Flying vehicle
const airplane = new flyingVehicle.Helicopter('Starfox');
console.log(airplane.name, airplane.wings, airplane.roll());

//Sea Creature
const seeSeaCreature = new seaCreature('sea thing', 5);
console.log(seeSeaCreature.name, seeSeaCreature.pinch())
