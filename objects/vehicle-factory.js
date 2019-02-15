'use strict';

function CarFactory(name, wheels) {
    const newVehicle = Object.assign(
        {},
        {name},
        {wheels},
        {drive},
        {stop}

    );

    function drive() {
        return 'Moving Forward'
    }

    function stop() {
        return 'Stopping'
    }

    return Object.freeze(newVehicle);
}

function BikeFactory(name, wheels) {
    const newVehicle = Object.assign(
        {},
        {name},
        {wheels},
        {drive},
        {stop},
        {wheelie}

    );

    function drive() {
        return 'Moving Forward'
    };

    function stop() {
        return 'Stopping'
    };

    function wheelie() {
        return 'Wheee!';
    };

    return Object.freeze(newVehicle);
}

module.exports = {CarFactory, BikeFactory};
