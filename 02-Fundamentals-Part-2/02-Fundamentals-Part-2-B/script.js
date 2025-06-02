'use strict';
/*
const friends = ['Michael','Steven','Peter'];
console.log(friends);

const years = new Array(2000,2001,2002);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

friends[2]="Jay";
console.log(friends);

const firstName ='Jonas';
const jonas = [firstName, 'NewYork',2025-1995,"teacher",friends];
console.log(jonas);
console.log(jonas.length);
*/

/*
// Exercise
const calcAge = function (birthYear){
    return 2025-birthYear;
}
const years = [2000,2001,2002,2003,2004];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[2])];
console.log(ages);
*/
/*
// Method
const friends = ['Michael','Steven','Peter'];

// ADD Elements 
friends.push('Jay');
console.log(friends);

friends.unshift('John');
console.log(friends);

// REMOVE Elements
const popped = friends.pop();
console.log(friends);
console.log(popped);

const removed = friends.shift();
console.log(friends);
console.log(removed);

console.log(friends.indexOf('Steven'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
*/

// OBJECTS 
const jonas = {
    firstName : 'Jonas',
    lastName : 'John',
    age : 2025 - 1991,
    job : "teacher",
    friends : ['Michael','Steven','Peter']
};
/*
console.log(jonas.lastName);
console.log(jonas['lastName']);

const namekey = "Name";
console.log(jonas['first' + namekey]); 
console.log(jonas['last' + namekey]); 

const interestedIN = prompt("What do you want to know about jonas? Choose between firstName, lastName, age,job,and friends");

if(jonas[interestedIN]){
    console.log(jonas[interestedIN]);
}else{
    console.log("Wrong request");
}

// Adding new properties
jonas.location = 'Portugal';
jonas['twitter'] = 'jonas@123';
console.log(jonas);
*/
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);