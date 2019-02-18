'use strict';

//Flying vehicle parent
function FlyingVehicle(name, wings) {
  this.name = name;
  this.wings = wings;
};

FlyingVehicle.prototype.fly = function(){
  return 'Moving Up';
};

FlyingVehicle.prototype.crash = function() {
  return 'Whoops!';
};

//Airplane vehicle child
function AirPlane(name) {
  FlyingVehicle.call(this, name, 2);
};

AirPlane.prototype = new FlyingVehicle();

//Helicopter vehicle child
function Helicopter(name) {
  FlyingVehicle.call(this,name,0);
};

Helicopter.prototype = new FlyingVehicle();

Helicopter.prototype.roll = function roll() {
  return 'Do a barrel roll!';
};

module.exports = {FlyingVehicle, AirPlane, Helicopter};
