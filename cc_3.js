// Hoang Nguyen
// U12840485

class Car{
    // Create the instances of the Car class with 'make' and 'speed' properties
    constructor (make, speed){
        this.make = make;
        this.speed = speed;       
    }

    // Create the accelerate method 
    accelerate (){
        // Increase the speed by 10 each time it is called
        this.speed += 10;

        // Display the message
        console.log(`The speed of the ${this.make} after accelerating is ${this.speed} km/h.`);
    }

    // Create the brake method 
    brake () {
        // Decrease the speed by 5 each time it is called
        this.speed -= 5;

        // Display the message
        console.log(`The speed of the ${this.make} after braking is ${this.speed} km/h.`);
    }
}

// Test Car 1: BWM  starting at 120 km/h
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
// Test Car 2: Mercedes starting at 95 km/h
let merc = new Car("Mercedes", 95); 
console.log(`The car brand is ${merc.make}.`);
console.log(`The initial speed is ${merc.speed} km/h.`);
merc.accelerate();
merc.brake();
merc.brake();
merc.accelerate();
merc.accelerate();

