// Hoang Nguyen
// U12840485

class Car{
    constructor (make, speed){
        this.make = make;
        this.speed = speed;       
    }

    accelerate (){
        this.speed += 10;
        console.log(`The speed of the ${this.make} after accelerating is ${this.speed} km/h.`);
    }

    brake () {
        this.speed -= 5;
        console.log(`The speed of the ${this.make} after braking is ${this.speed} km/h.`);
    }
}
