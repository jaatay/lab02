'use strict';

//SEA CREATURE FACTORY

function SeaFactory(name, fins) {
    const newCreature = Object.assign(
        {},
        {name},
        {fins},
        {swim},
        {eat}

    );

    function swim() {
        return 'Through the ocean blue'
    }

    function eat() {
        return 'Yum'
    }

    return Object.freeze(newCreature);
}


//FISH FACTORY
function FishFactory(name, fins) {
    const newCreature = Object.assign(
        {},
        {name},
        {fins},
        {swim},
        {eat}

    );

    function swim() {
        return 'Through the ocean blue'
    }

    function eat() {
        return 'Yum'
    }

    return Object.freeze(newCreature);
}

//LOBSTER FACTORY

function LobsterFactory(name, fins) {
    const newCreature = Object.assign(
        {},
        {name},
        {fins},
        {swim},
        {eat}

    );

    function swim() {
        return 'Through the ocean blue'
    }

    function eat() {
        return 'Yum'
    }

    return Object.freeze(newCreature);
}

module.exports = {SeaFactory, FishFactory, LobsterFactory};