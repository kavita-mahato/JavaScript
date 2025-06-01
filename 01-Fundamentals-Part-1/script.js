let js = 'amazing';
console.log(40 + 8 + 23 - 10);  
console.log("Kavita");
// console.log(js);

/* Value name and conventions */
let myFirstJob = "programmer";
let job1 = "programmer";
/* Variable name should not start with capital letter (that is used in OOPs) */

// Data types
let javaisFun = true;
console.log(javaisFun);
console.log(typeof(true));
console.log(typeof(javaisFun));
console.log(typeof(23));
console.log(typeof('Kavita'));

javaisFun = "YES!";
console.log(typeof(javaisFun)); 

let year;
console.log(typeof(year));

console.log(typeof null);   /* Bug in JavaScipt */ 

const birthyear = 2000 ;
// birthyear = 2020;
/* we can not declare empty const variable */

var job = 'programmer';
job = 'teacher';

firstname = 'Kavita'; /* Doesn't create variable in current scope */
console.log(firstname);

// Math Operators
const now = 2020;
const ageKavita = now - 2000;
const ageAntara = now - 2010;
console.log(ageKavita, ageAntara);

console.log(ageKavita*2, ageAntara/2,2**3);

const firstName = 'Kavita ';
const lastName = 'Mahato';
console.log(firstName + lastName);

// Assignment operators
let x = 10+5;
console.log(x);
x+=10;
console.log(x);
x-=5;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);

// Comparison operators
console.log(ageKavita > ageAntara);  /* >,<,>=,<=,==,!= */

const isFullAge = ageKavita >= 18;
console.log(isFullAge);

console.log(now - 2000 > now - 2010);  /* subtraction has high priority */
