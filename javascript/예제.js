
// 6번
const a = 'a';

if (a === 'a') {
  console.log(a);
}

{
  var foo = 'foo';
  console.log(foo);
}

console.log(foo);

function bar() {
  var baz = 'baz';
  console.log(baz);
  console.log(foo);
}

bar();




// 7번
console.log(text);

var text = 'hello world!';


// 9번
const year = 2021;
const lastName = 'kim';

console.log(year - lastName);


// 10번
const number = 0;
const isActive = false;

console.log(number == isActive);


// 11번
// const firstName = 'Jin';
// const lastName = 'Kim';

// console.log(`${firstName}-${lastName}`);

// 12번
const result = 15 / 3;

if (result > 0) {
  console.log('양수');
} else if (result === 0) {
  console.log('0');
} else {
  console.log('음수')
}

// 13번
const n = 18;
const isMultipleOfThree = n % 3 === 0;
const isMultipleOfFive = n % 5 === 0;

if (isMultipleOfThree && isMultipleOfFive) {
  console.log('15의 배수');
} else {
  if (isMultipleOfThree) {
    console.log('3의 배수');
  } else if (isMultipleOfFive) {
    console.log('5의 배수');
  }
}


// 14번
// const n = 15 / 3;

// console.log(n % 4 === 0 && '5의 배수입니다.');


// 15번
const age = 20;
const canDrink = age >= 20 ? true : false;

console.log(canDrink);

// 16번
// const n = 15;

// switch (n % 3) {
//   case 0:
//     console.log('3의 배수입니다.');
//     break;

//   default:
//     console.log('3의 배수가 아닙니다.');
// }


// 17번
for (let i = 0; i < 5; i++) {
  console.log('Hi');
}


// 18번
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 19번
// let n = 0;

// while (n < 10) {
//   console.log('n is less than 10');
//   n += 1;
// }

// 20번
greeting('Jin');

function greeting(name) {
  console.log(`Hi ${name}!`)
}

// 21번
greeting('Jin');

var greeting = function (name) {
  console.log(`Hi ${name}!`)
}

// 22번
function mutiply2(num) {
  return num *2
}

// 23번
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person = new Person('Jin', 99);
console.log(person.age);

// 24번
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hi! My name is ${this.name}.`);
};

const me = new Person('Jin', 99);
me.sayHello();

// 25번
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  sayHello() {
    console.log(`Hi! My name is ${this.fullName}`);
  }
}

const me = new Person('Jin', 'Kim');
me.sayHello();

// 26번
class Animal {
  constructor(name) {
    this.name = name;
  }

  attack() {
    console.log('attack');
  }
}

class Lion extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }

  attack() {
    console.log('attack!!');
  }
}

const lion = new Lion('leo', 'white');
lion.attack();