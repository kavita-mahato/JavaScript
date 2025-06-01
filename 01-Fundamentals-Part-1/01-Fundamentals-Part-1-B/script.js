/* const firstName = 'Kavita';
const job = 'student';
const birthYear = 1991;
const year = 2020;
const kavita = "I'm " + firstName + ', a ' + (year-birthYear)+' years old ' + job;
console.log(kavita);

// Using Template literal
const kavitaNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
console.log(kavitaNew);

console.log(`Just a regular string.`);

console.log('String with \n\
multiple \n\
lines');

// Using Template literal
console.log(`String with
multiple
lines`);
*/

//                               If-else statement
/*
const age = 15;
// const isOldEnough = age>=18;
if (age>=18){
    console.log("Eligible to start driving 👍");
}
else{
    const yearsleft = 18-age;
    console.log(`Not eligible to drive.
You can start driving after ${yearsleft} years.`);
}

const birthYear = 1991;
let century;
if(birthYear <= 2000){
    century = 20;
}
else{
    century = 21;
}
console.log(century);
*/

// Type Conversion 
/*
const inputYear = '1991';
console.log(inputYear + 18);
console.log(Number(inputYear)+18);
console.log(inputYear);

console.log(Number('Jonas')) ;
console.log(typeof(NaN));

console.log(String(23)+11);

// Type Coersion
console.log("I am " + 23 + " years "+ "old");

console.log('23'-'10'-3);
console.log('23'/'2'); 

let n = '1'+1;
n=n-1;
console.log(n);
*/

/* console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean('kavita')); 
console.log(Boolean(''));

const money =10 ;
if (money){
    console.log("Don't spend it all");
} else{
    console.log('You should get a job');
}

let height;     
// height is undefined and undefined is falsy
if(height){
    console.log('Yey! Height is defined.');
}else{ 
    console.log('Height is undefined.')
}
*/

// Equility ,comparison Operator
/*const age = "18";
if (age===18){
    console.log("You just became an adult : (strict)");
} 
if (age==18){
    console.log("You just become an adult : D (loose)");
}
const favorite = Number(prompt("What's your favorite Number?"));
console.log(favorite);
console.log(typeof favorite); 

if (favorite === 23){
    console.log('Cool!23 is an amazing number!');
}else if (favorite === 7){
    console.log("7 is also a cool number!");
}
else {
    console.log("Number is not 23 nor 7.");
}

if (favorite !==23) console.log("Why not 23 or 7");
*/
const haslicense = true;
const hasgoodvision = true;

console.log(haslicense && hasgoodvision);
console.log(haslicense || hasgoodvision);
console.log(!haslicense);

// const shouldDrive = haslicense && hasgoodvision; 
// if (shouldDrive){
//     console.log("Sarah should drive");
// }else{
//     console.log("someone else should drive")
// }

const isTired = false;
if(haslicense && hasgoodvision && isTired){
    console.log("Sarah is able to drive");
}else{
    console.log("someone else should drive");
}