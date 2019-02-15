'use strict';

//Flying vehicle parent
const FlyingVehicle = function(name, wings) {
  this.name = name;
  this.wings = wings;
};

Vehicle.prototype.fly = () => {
  return 'Moving Up';
};

Vehicle.prototype.crash = () => {
  return 'Whoops!';
};

//Airplane vehicle child
const AirPlane = function(name) {
  FlyingVehicle.call(this, name, 2);
};

AirPlane.prototype = new FlyingVehicle();

//Helicopter vehicle child
const Helicopter = function(name) {
  FlyingVehicle.call(this,name,0);
};

Helicopter.prototype = new FlyingVehicle();

Helicopter.prototype.roll = () => {
  return 'Do a barrel roll!';
};

module.exports = {Airplane, Helicopter};
