'use strict';

const Vehicle = require('../objects/vehicle-constructor');
const classCar = require('../objects/car');
const classCycle = require('../objects/motorcycle');
const factoryVehicle = require('../objects/vehicle-factory');


//test comment 
//VEHICLES
describe('Vehicles', () => {

  describe('Factory Car Class', () => {
    let factoryTestCar = new factoryVehicle.CarFactory('factoryCar', 4);
    let factoryTestBike = new factoryVehicle.BikeFactory('factoryBike', 2);

    it('has a name property', () => {
      expect(factoryTestCar.name).toBe('factoryCar');
    });

    it('can drive', () => {
      expect(factoryTestCar.drive()).toBe('Moving Forward');
    });

    it('can stop', () => {
      expect(factoryTestCar.stop()).toBe('Stopping');
    });

    it('has a name property', () => {
      expect(factoryTestBike.name).toBe('factoryBike');
    });

    it('has dos wheels', () => {
      expect(factoryTestBike.wheels).toBe(2);
    });

    it('bike can drive', () => {
      expect(factoryTestBike.drive()).toBe('Moving Forward');
    });

    it('can do wheelie', () => {
      expect(factoryTestBike.wheelie()).toBeTruthy();
    });

  });

  describe('New Motorcycle Class', () => {
    let testCycle = new classCycle('testCycle', 2);

    it('can do wheelie', () => {
      expect(testCycle.wheelie()).toBeTruthy();
    });

    it('has 2 wheels', () => {
      expect(testCycle.wheels).toBe(2);
    });

    it('has a name property', () => {
      expect(testCycle.name).toBe('testCycle');
    });

  });

  describe('New Car Class', () => {
    let testCar = new classCar('test', 3);

    it('can go forward', () => {
      expect(testCar.drive()).toBe('Moving Forward');
    });

    it('has 3 wheels', () => {
      expect(testCar.wheels).toBe(3);
    })

    it('has a name', () => {
      expect(testCar.name).toBe('test');
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

describe('Vehicles', () => {

  describe('Factory Car Class', () => {
    let factoryTestCar = new factoryVehicle.CarFactory('factoryCar', 4);
    let factoryTestBike = new factoryVehicle.BikeFactory('factoryBike', 2);

    it('has a name property', () => {
      expect(factoryTestCar.name).toBe('factoryCar');
    });

    it('can drive', () => {
      expect(factoryTestCar.drive()).toBe('Moving Forward');
    });

    it('can stop', () => {
      expect(factoryTestCar.stop()).toBe('Stopping');
    });

    it('has a name property', () => {
      expect(factoryTestBike.name).toBe('factoryBike');
    });

    it('has dos wheels', () => {
      expect(factoryTestBike.wheels).toBe(2);
    });

    it('bike can drive', () => {
      expect(factoryTestBike.drive()).toBe('Moving Forward');
    });

    it('can do wheelie', () => {
      expect(factoryTestBike.wheelie()).toBeTruthy();
    });

  });

  describe('New Motorcycle Class', () => {
    let testCycle = new classCycle('testCycle', 2);

    it('can do wheelie', () => {
      expect(testCycle.wheelie()).toBeTruthy();
    });

    it('has 2 wheels', () => {
      expect(testCycle.wheels).toBe(2);
    });

    it('has a name property', () => {
      expect(testCycle.name).toBe('testCycle');
    });

  });

  describe('New Car Class', () => {
    let testCar = new classCar('test', 3);

    it('can go forward', () => {
      expect(testCar.drive()).toBe('Moving Forward');
    });

    it('has 3 wheels', () => {
      expect(testCar.wheels).toBe(3);
    })

    it('has a name', () => {
      expect(testCar.name).toBe('test');
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