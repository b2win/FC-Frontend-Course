"use strict";
// const message: string = "hello world!"
// console.log(message)
let count = 0;
count += 1;
// count = "문자열";
const message = "hello world";
const done = false;
const numbers = [1, 2, 3];
const messages = ["hello", "world"];
// message.push(1);
let mightBeUndefined = undefined;
let nullableNumber = null;
let color = "red";
color = "yellow";
// color = "green";
function sum(x, y) {
    return x + y;
}
const result = sum(1, 2);
function sumArray(numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);
console.log(total);
function returnStringOrNumber() {
    return 4;
}
class Circle {
    // radius: number;
    // constructor(radius: number) {
    //   this.radius = radius;
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle {
    // width: number;
    // height: number;
    // constructor(width: number, height: number) {
    //   this.width = width;
    //   this.height = height;
    // }
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const circle = new Circle(5);
const rectangle = new Rectangle(2, 5);
const shapes = [circle, rectangle];
shapes.forEach(shape => {
    console.log(shape.getArea());
});
const person = {
    name: "사람이요",
    age: 20,
};
const expert = {
    name: "개발이요",
    skills: ["JavaScript", "react", "typescript"]
};
//Generics
function merge(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const merged = merge({ foo: 1 }, { bar: 2, foobar: 3 });
function wrap(param) {
    return {
        param
    };
}
const wrapped = wrap("aaa");
wrapped.param;
const items = {
    list: [1, 2, 3],
    value: "abc",
};
class Queue {
    constructor() {
        this.list = [];
    }
    get length() {
        return this.list.length;
    }
    enqueue(item) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}
const queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
while (queue.length > 0) {
    console.log(queue.dequeue());
}
