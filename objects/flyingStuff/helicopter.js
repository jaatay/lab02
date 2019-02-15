'use strict';

class Helicopter {

    constructor(name, wings){
        this.name = name;
        this.wheels = wings;
    };

    fly(){
        return 'Moving Up';
    }

    crash(){
        return 'Whoops!';
    }

    roll(){
        return 'Do a barrel roll!';
    }
}

module.exports = Helicopter;