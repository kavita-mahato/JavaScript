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
/*
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
*/
// -----------------------------------------------------------

// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, 
by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
/*
class CarCl {
    constructor(make,speed){
        this.make = make;
        this.speed = speed;
    }

    accelarate(){
    this.speed +=  10;
    console.log(this.speed);
    }
    brake(){
    this.speed -=  5;
    console.log(this.speed);
    }   

    get speedUS(){
        return this.speed/1.6;
    }
    set speedUS(speed){
        this.speed = speed*1.6;
    }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelarate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
*/

// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, 
the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 
'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens 
when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

const Car = function (make, speed){
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelarate = function(){
    this.speed += 20;
    this.charge -= 1;
    console.log(`Tesla going at ${this.speed} km/h, with a charge of ${this.charge}`);
}
Car.prototype.brake = function(){
    this.speed = this.speed - 5;
    console.log(this.speed);
}

const EV = function(make, speed, charge){
    Car.call(this,make, speed);
    this.speed =speed;
    
};

EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function(chargeTo){
    this.charge = chargeTo;
}
const tesla = new EV('Tesla', 120,23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.accelarate();