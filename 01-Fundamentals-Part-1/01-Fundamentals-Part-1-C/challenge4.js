const bill = 430;
const tip = bill<=100 && bill>- 58 ? bill*0.15 : bill*0.2;
console.log(`The bill is ${bill}, the tip is ${tip}`);