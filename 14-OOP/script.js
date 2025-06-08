'use strict';

// Constructor Functions and the new Operator
const Person = function (firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this 
    // this.calcAfe = function(){
    //     console.log(2037-this.birthYear);
    // };
}

const kavita = new Person('Kavita',2000);
console.log(kavita);

// 1. New {} is created
// 2. Function is called, this = {}
// 3. {} linked to a proptotype
// 4. Function automatically returns {}

const matilda = new Person('Matilda',2020);
console.log(matilda);
console.log(kavita instanceof Person);

// PROTOTYPES
console.log(Person.prototype);
Person.prototype.calcAge = function (){
    console.log(2025 - this.birthYear);
};
kavita.calcAge();
matilda.calcAge();

console.log(kavita.__proto__);
console.log(kavita.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(kavita));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototyeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(kavita.species, matilda.species);
console.log(kavita.hasOwnProperty('species'));

// console.log(Person.prototype.constructor);