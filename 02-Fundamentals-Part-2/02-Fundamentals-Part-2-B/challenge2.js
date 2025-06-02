/*
let bill = Number(prompt("Bill excluding tip : "));
function calcTip(bill){
    const tip = bill<=100 && bill>= 50 ? bill*0.15 : bill*0.2;
    return tip;
}
console.log(calcTip(bill));
console.log(`The bill is ${bill}, the tip is ${calcTip(bill)}`);
*/

const bills = [125,555,44];
function calcTip(bill){
    const tip = bill<=100 && bill>= 50 ? bill*0.15 : bill*0.2;
    return tip;
}

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(`The bills are ${bills} and corresponding tips are ${tips}
The total bill is ${bills[0]+tips[0]}, ${bills[1]+tips[1]}, ${bills[2]+tips[2]}`);