'use strict';

class Lobster {

    constructor(name, pincers){
        this.name = name;
        this.pincers = pincers;
    };

    swim(){
        return 'Moving Forward';
    }

    eat(){
        return 'Stopping';
    }

    spawn(){
        return 'Going to live in a soda can';
    }

    pinch(){
        return 'Ouch!';
    }
}

module.exports = Lobster;