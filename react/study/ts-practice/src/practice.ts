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