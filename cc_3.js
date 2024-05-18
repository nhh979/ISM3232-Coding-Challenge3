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

// Test Car 1:
let bmw = new Car('BMW', 120);
console.log(`The car brand is ${bmw.make}.`);
console.log(`The initial speed is ${bmw.speed} km/h.`);
bmw.brake();
bmw.accelerate();
bmw.brake();
bmw.brake();
bmw.accelerate();
bmw.accelerate();

console.log("----------------------------------------------------");
// Test Car 2:
let merc = new Car("Mercedes", 95); 
console.log(`The car brand is ${merc.make}.`);
console.log(`The initial speed is ${merc.speed} km/h.`);
merc.accelerate();
merc.brake();
merc.brake();
merc.accelerate();
merc.accelerate();

