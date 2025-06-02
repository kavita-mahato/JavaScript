'use strict';

/*
let hasDriversLicense = false;
const passTest = true;
if(passTest) hasDriverLicense = true;
if(hasDriversLicense) console.log("hello");
*/

// const interface = "Audio";   /* strict mode reserved varisble*/

/*
function logger(){
    console.log("Kavita");
}

logger();
logger();
logger();

function fruitProcessor(apples,oranges){
    console.log(apples,oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const applejuice = fruitProcessor(5,6);
console.log(applejuice);
*/

/*
//  function declaration
function calcAge(birthYear){
    return 2025 - birthYear;
}

const age = calcAge(2000);
console.log(age);

// function expression
const calcAge2 = function (birthYear){
    return 2025 - birthYear;
}

const age2 = calcAge2(2000);
console.log(age,age2);
*/

/*
const calcAge2 = function (birthYear) {
    return 2025 - birthYear;
}

// Arrow function
const calcAge3 = birthYear => 2025 - birthYear;
const age3 = calcAge3(2000);
console.log(age3);

const yearleftRetirement = ( birthYear, firstName ) => {
    const age = 2025 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearleftRetirement(2000, "Kavita"));
*/

// function calling other function
/*
function cutfruit(fruit){
    return fruit *4;
}
function fruitProcessor(apples,oranges){
    const applepieces = cutfruit(apples);
    const orangepieces = cutfruit(oranges);
    const juice = `Juice with ${applepieces} pieces of apples and ${orangepieces} pieces of oranges.`
    return juice;
}
console.log(fruitProcessor(2,3));
*/
/*
const calcAge = function (birthYear){
    return 2025 - birthYear;
}
const yearleftRetirement = function(birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement>0){
        return retirement;
    }
    else{
        console.log(`${firstName} has already retired.`);
        return -1;
    }
}
console.log(yearleftRetirement(1950,'Jonas'));
console.log(yearleftRetirement(2000,'Mike'));
*/


