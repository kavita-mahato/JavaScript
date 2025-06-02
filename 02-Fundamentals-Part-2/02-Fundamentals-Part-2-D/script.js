'use strict';
/*
const kavita = [
    'Kavita',
    'Mahato',
    'Student',
    ['X','Y','Z']
]
for (let i = kavita.length; i >=0; i--) {
    console.log(kavita[i]);   
}

for (let exercise = 0; exercise < 4; exercise++) {
    console.log("_________ Starting Exercise _________");
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetation ${rep}`); 
    } 
}
*/

// WHILE loop
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weight repetation ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random()*6)+1;
console.log(dice); 
while(dice !== 6){
    console.log(`Your rolled a ${dice}`);
    dice = Math.trunc(Math.random()*6)+1;
    if (dice === 6) console.log('Loop is about to end...');
}