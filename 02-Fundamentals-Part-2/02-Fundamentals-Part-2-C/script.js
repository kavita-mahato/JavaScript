'use strict';

// FUNCTION to OBJECT
/*
const jonas = {
    firstName : 'Jonas',
    lastName : 'John',
    birthYear : 1991,
    job : "teacher",
    friends : ['Michael','Steven','Peter'],
    hasLicense : false,

    // calcAge : function(){
    //     // console.log(this);
    //     return 2025-this.birthYear;
    // }

    calcAge : function(){
        this.age = 2025 - this.birthYear;
        return this.age;
    },

    check : function(){
        if(this.hasLicense === true)
            return "he has a driver's license.";
        else
            return "he doesn't have drivers license.";
    },

    getSummary : function(){
        return `${this.firstName} is a ${this.calcAge()}-year old teacher, and he has ${this.hasLicense ? 'a':'no'} driver's license.`;
    }
};

jonas.calcAge();
jonas.check();

// CHALLENGE
console.log(`${jonas.firstName} is a ${jonas.calcAge()}-year old teacher, and ${jonas.check()}`);
console.log(jonas.getSummary());
*/
/*
const kavita = [
    'Kavita',
    'Mahato',
    'Student',
    ['X','Y','Z']
]
const types =[];

for (let i = 0; i < kavita.length; i++) {
    console.log(kavita[i],typeof kavita[i]);   

    // filling types array
    // types[i] = typeof kavita[i];
    types.push(typeof kavita[i]);
}

console.log(types);
*/

const years = [2000,2001,2002,2003,2004]
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages[i] = 2025 - years[i]; 
}

console.log(ages);