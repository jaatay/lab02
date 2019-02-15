'use strict';

class Fish {

    constructor(name, fins){
        this.name = name;
        this.fins = fins;
    };

    swim(){
        return 'Moving Forward';
    }

    eat(){
        return 'Stopping';
    }

    spawn(){
        return 'Going upriver no matter what';
    }
}

module.exports = Fish;