'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

 
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order:function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },

  orderDelivery: function(starterIndex=1, mainIndex=0, time='20:00', address){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  // Real world example
  orderPasta:function(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza:function(mainIng,...otherIng){
    console.log(mainIng);
    console.log(otherIng);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};


/*
// ARRAY Destructuring
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z] = arr;
console.log(x,y,z);
console.log(arr);

let [main,,secondary] = restaurant.categories;
console.log(main,secondary);

// Swapping variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main,secondary);

[main,secondary] = [secondary, main]
console.log(main,secondary);

console.log(restaurant.order(2,0));
const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter,mainCourse);

const nested = [2,4,[5,6]];
// const[i,,j] = nested;
// console.log(i,j);
const [i,,[j,k]] = nested;
console.log(i,j,k);

// Default values
const[p=1,q=1,r=1] = [8,9];
console.log(p,q,r);
*/

/*
// OBJECT Destructuring
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {name:restaurantName, openingHours:hours,categories:tags} = restaurant;
console.log({name,openingHours,categories});

const {menu = [], starterMenu , starters =[]} = restaurant;
console.log(menu.starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = {a:23, b:7, c:14};

({a,b} =obj);
console.log(a,b);

// Nested objects
const {fri:{open:o,close:c}} = openingHours;
console.log(o,c);

restaurant.orderDelivery(2,2,'22:30','street name');
*/

// Spread Operator
/*
const arr = [7,8,9];
const badNewArr = [1,2,arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1,2,...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 Arrays
const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
console.log(menu);

// Interables are arrays, strings, maps, sets, NOT objects
const str = 'kavita';
const letters = [...str,' ','S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str}`);          wrong

// const ingredients = [prompt('Let\'s make pasta! Ingredients 1 ? '), 
//   prompt("Ingredient 2 ? "),
//   prompt("Ingredient 3 ? ")
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {...restaurant,founder:'Kavita',foundedIn:1998};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

const arr = [1,2,...[3,4]];
const [a,b,...others] = [1,2,3,4,5];
console.log(a,b,others);

const [pizza,,risotto,...otherfood]=[...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza,risotto,otherfood);

// Objects
const {sat,...weekday} = restaurant.openingHours;
console.log(weekday);

// (2) FUNCTIONS
const add = function(...numbers){
  let sum = 0 ;
  for (let i = 0; i < numbers.length; i++) {
    sum+= numbers[i];
  }
  console.log(sum);
};
add(2,3);
add(5,3,7,2);

const x = [23,5,7];
add(...x);

restaurant.orderPizza('mushrooms','onion','olives','spinach');
restaurant.orderPizza('mushrooms');