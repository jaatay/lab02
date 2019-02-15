'use strict';

class Motorcycle {

    constructor(name, wheels){
        this.name = name;
        this.wheels = wheels;
    };

    drive(){
        return 'Moving Forward';
    }

    stop(){
        return 'Stopping';
    }

    wheelie(){
        return 'Wheee!';
    }
}

module.exports = Motorcycle;