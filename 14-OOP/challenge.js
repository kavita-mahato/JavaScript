'use strict';

// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the 
current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function (make, speed){
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelarate = function(){
    this.speed = this.speed + 10;
    console.log(this.speed);
}
Car.prototype.brake = function(){
    this.speed = this.speed - 5;
    console.log(this.speed);
}

const audi = new Car ("Audi",100);
const bmw = new Car ("BMW",120);
const mercedes = new Car ("Mercedes",120);
console.log(audi);
audi.accelarate();
audi.brake();
console.log(bmw);
bmw.accelarate();
bmw.brake();
console.log(mercedes);
mercedes.accelarate();
mercedes.brake();