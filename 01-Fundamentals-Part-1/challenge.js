// My code
/* 
let massMark = 78;
let massJohn = 92;
let heightMark = 1.69;
let heightJohn = 1.95;

let bmiMark = massMark / heightMark **2 ;
let bmiJohn = massJohn / heightJohn **2;

let markHigherBMI = bmiMark > bmiJohn ;

console.log(bmiMark, bmiJohn);

console.log(markHigherBMI);
*/

// Tutorial
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark **2 ;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn ;

console.log(BMIMark,BMIJohn,markHigherBMI);  