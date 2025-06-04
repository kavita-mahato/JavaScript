'use strict';
/*
console.log(me);
// console.log(job);
// console.log(year);

var me = 'kavita';
let job = 'student';
const year = 2000;

// FUNCTIONS
console.log(addDecl(2,3));
// console.log(addExpr(2,3));
// console.log(addArrow());
function addDecl(a,b){
    return a+b;
}
const addExpr = function (a,b){
    return a+b;
};
var addArrow = (a,b) => a+b;

// EXAMPLE
if(!numProducts) deleteCart();
var numProducts = 10;
function deleteCart(){
    console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x===window.x);
console.log(x===window.y);
console.log(x===window.z);

// The this Keyword in Practice
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const kavita = {
    firstName : "Kavita",
    year:2000,
    calcAge: function(){
        
        console.log(2025-this.year);
        // solution 1
        // const self = this;
        // const isMillenial = function(){
        //     console.log(self);
        //     console.log(self.year >= 1981 && this.year <= 1996);
        // }

        
        console.log(2025-this.year);
        const isMillenial = ()=>{
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        }
        isMillenial();
    },
    greet:() => console.log(`Hey ${this.firstName}`),
};
kavita.calcAge();

// const matilda = {
//     year:2001
// };
// matilda.calcAge = kavita.calcAge;
// matilda.calcAge();

// const f = kavita.calcAge;
// f();
kavita.greet();
// console.log(this.firstName);
kavita.calcAge();
*/
/*
const addExpr = function(a,b){
    console.log(arguments);
    return a+b;
};
addExpr(2,5);
addExpr(2,5,10);
*/
/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name : 'Jonas',
    age : 30,
};
const friend = me;
friend.age = 27;
console.log("Friend",friend);
console.log("Me",me);
*/

// Primitive types
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName,oldLastName);

// Reference types
const jessica = {
    firstName : 'Jessica',
    lastName : 'Williams',
    age : 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log("before marriage : ",jessica);
console.log("after marriage : ",marriedJessica);

// Copying objects
const jessica2 = {
    firstName : 'Jessica',
    lastName : 'Williams',
    age : 27,
    familiy: ['Alice', 'Bob'],
};

const jessicacopy = Object.assign({},jessica2);
jessicacopy.lastName = 'Davis';

jessicacopy.familiy.push('Mary');
jessicacopy.familiy.push('John');

console.log("before marriage : ",jessica2);
console.log("after marriage : ",jessicacopy);

