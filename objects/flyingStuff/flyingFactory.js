'use strict';

function PlaneFactory(name, wings) {
    const newVehicle = Object.assign(
        {},
        {name},
        {wings},
        {fly},
        {crash}

    );

    function fly() {
        return 'Moving Up'
    }

    function crash() {
        return 'Whoops!'
    }

    return Object.freeze(newVehicle);
}

function HeloFactory(name, wings) {
    const newVehicle = Object.assign(
        {},
        {name},
        {wings},
        {fly},
        {crash},
        {roll}

    );

    function fly() {
        return 'Moving Up'
    };

    function crash() {
        return 'Whoops!'
    };

    function roll() {
        return 'Do a barrel roll!';
    };

    return Object.freeze(newVehicle);
}

module.exports = {PlaneFactory, HeloFactory};