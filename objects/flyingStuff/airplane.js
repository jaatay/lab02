'use strict';

class AirPlane {

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
}

module.exports = Airplane;