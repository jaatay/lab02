'use strict';

const Vehicle = require('../vehicle-constructor');
const classCar = require('../car');

describe('Vehicles', () => {

  describe('Class Car', () => {
    let testCar = new classCar('test', 3);

    it('exists', () => {
      expect(testCar.drive()).toBe('Moving Forward');
    });

    it('has 3 wheels', () => {
      expect(testCar.wheels.toBe(3));
    })

    it('has a name', () => {
      expect(testCar.name.toBe('test'));
    })
  });

  describe('Car', () => {

    let car = new Vehicle.Car('foo');

    it('has 4 wheels', () => {
      expect(car.wheels).toEqual(4);
    });

    it('can drive', () => {
      expect(car.drive()).toBeTruthy();
    });

    it('can stop', () => {
      expect(car.stop()).toBeTruthy();
    });

    it('cannot do a wheelie', () => {
      expect(car.wheelie).toBeUndefined();
    });

  });

  describe('Motorcycle', () => {

    let motorcycle = new Vehicle.Motorcycle('foo');

    it('has 2 wheels', () => {
      expect(motorcycle.wheels).toEqual(2);
    });

    it('can drive', () => {
      expect(motorcycle.drive()).toBeTruthy();
    });

    it('can stop', () => {
      expect(motorcycle.stop()).toBeTruthy();
    });

    it('cannot do a wheelie', () => {
      expect(motorcycle.wheelie()).toBeTruthy();
    });

  });

});