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

// PROTOTYPAL INHERITANCE 
console.log(kavita.__proto__);
// Object.prototype (top of the prototype chain)
console.log(kavita.__proto__.__proto__);
console.log(kavita.__proto__.__proto__.__proto__);
console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [3,6,4,5,6,9,3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function(){
    return [...new Set(this)];
}

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x+1);