// const message: string = "hello world!"
// console.log(message)

let count = 0;
count += 1;
// count = "문자열";

const message: string = "hello world";
const done: boolean = false;

const numbers: number[] = [1, 2, 3];
const messages: string[] = ["hello", "world"];

// message.push(1);

let mightBeUndefined: string | undefined = undefined;
let nullableNumber: number | null = null;

let color: "red" | "orange" | "yellow" = "red";
color = "yellow";
// color = "green";


function sum(x: number, y: number): number {
  return x + y;
}

const result = sum(1, 2);


function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);
console.log(total);

function returnStringOrNumber(): string | number {
  return 4;
}

interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  // radius: number;

  // constructor(radius: number) {
  //   this.radius = radius;
  constructor(public radius: number){
  }
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  // width: number;
  // height: number;
  // constructor(width: number, height: number) {
  //   this.width = width;
  //   this.height = height;
  // }
  constructor(private width: number, private height: number){
  }
  getArea() {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(2, 5);
const shapes: Shape[] = [circle, rectangle];

shapes.forEach(shape => {
  console.log(shape.getArea())
})

interface Person {
  name: string;
  age?: number;
}

// interface Developer {
  // name: string;
  // age?: number;
  interface Developer extends Person {
  skills: string[];
}

const person: Person = {
  name: "사람이요",
  age: 20,
}

const expert: Developer = {
  name: "개발이요",
  skills: ["JavaScript", "react", "typescript"]
}


//Generics
function merge<T1, T2>(a: T1, b: T2) {
  return {
    ...a,
    ...b
  };
}

const merged = merge({foo : 1}, {bar : 2, foobar : 3})

function wrap<T>(param: T) {
  return {
    param
  };
}

const wrapped = wrap("aaa");

wrapped.param

// interface Items<T> {
//   list: T[];
// }
type Items<T, V> = {
  list: T[];
  value: V
}

const items: Items<number, string> = {
  list: [1, 2, 3],
  value: "abc",
};


class Queue<T> {
  list: T[] = [];

  get length() {
    return this.list.length;
  }

  enqueue(item: T) {
    this.list.push(item);
  }

  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

while (queue.length > 0) {
  console.log(queue.dequeue());
}