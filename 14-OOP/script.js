'use strict';

/*
// Constructor Functions and the new Operator
const Person = function (firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this 
    // this.calcAfe = function(){
    //     console.log(2037-this.birthYear);
    // };
}

const kavita = new Person('Kavita',2000);
console.log(kavita);

// 1. New {} is created
// 2. Function is called, this = {}
// 3. {} linked to a proptotype
// 4. Function automatically returns {}

const matilda = new Person('Matilda',2020);
console.log(matilda);
console.log(kavita instanceof Person);

Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};
Person.hey();

// PROTOTYPES
console.log(Person.prototype);
Person.prototype.calcAge = function (){
    console.log(2025 - this.birthYear);
};
kavita.calcAge();
matilda.calcAge();

console.log(kavita.__proto__);
console.log(kavita.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(kavita));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototyeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(kavita.species, matilda.species);
console.log(kavita.hasOwnProperty('species'));

// PROTOTYPAL INHERITANCE 
console.log(kavita.__proto__);
// Object.prototype (top of the prototype chain)
console.log(kavita.__proto__.__proto__);
console.log(kavita.__proto__.__proto__.__proto__);
console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [3,6,4,5,6,9,3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function(){
    return [...new Set(this)];
}

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x+1);
*/

// ------------------------------------------------------------------
/*
// ES6 Classes

// Class expression
// const PersonCl = class {}

// Class declaration
class PersonCl {
    // constructor method
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge = function(){
    console.log(2025 - 2005);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2025 - this.birthYear;
  }
  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    // _fullname so that ano conflict occurs with fullname in the constructor method
    if (name.includes(' ')) this._fullName = name;       
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }

}

const kavita = new PersonCl('Kavita Mahato', 2005);
console.log(kavita);
kavita.calcAge();
console.log(kavita.age);
console.log(kavita.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

kavita.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

// const antara = new PersonCl('Antara', 2000);
PersonCl.hey();

// -------------------------------------------------------------------
// Setters and Getters
const account = {
  owner: 'Kavita',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 500;
console.log(account.movements);
*/
// -------------------------------------------------------------------
/*
// Object.create (3rd way of implementing prototypal inheritance or delegance)
const PersonProto = {
  calcAge() {
    console.log(2025 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2000;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1991);
sarah.calcAge();
*/
// -------------------------------------------------------------------
// Inheritance Between "Classes": Constructor Functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
//   this.firstName =firstName;
//   this.birthYear = birthYear;
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

// Student.prototype = Person.prototype;
// ^ Wrong because in this way we will not end up in the prototypevchain tha twe need

Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}
const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

console.dir(Student.prototype.constructor);
// we set the prototype property of student using object.create
Student.prototype.constructor = Student;
// ^ this is done to rely on coonstructor property of student
console.dir(Student.prototype.constructor);