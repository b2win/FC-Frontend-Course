/*
  Q1) 자연수 n을 입력받아 삼각형 모양의 문자를 출력하는 printTriangle 함수를 완성해주세요. (30점)
  제한사항: n은 2이상, 10 이하의 자연수입니다.
  힌트: for 문 사용, 개행 문자 사용('\n')

  n = 2
  *
  **

  n = 10
  *
  **
  ***
  ****
  *****
  ******
  *******
  ********
  *********
  **********
*/
function printTriangle(n) {
  let result = '';
  // do something
  for (let i = 0; i < n && n > 1; i++) {
    for (let j = 0; j <= i; j++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);
}

printTriangle(2);
printTriangle(10);



/*
  Q2) 자연수 n을 입력받아 n이 짝수이면 '짝수입니다.', 홀수이면 '홀수입니다.'를 출력하는 isEvenNumber 함수를 완성해주세요. (10점)
  제한사항: n은 1이상의 양수입니다.
*/
function isEvenNumber(n) {
  // do something
  if (n % 2 === 0) {
    console.log('짝수입니다.')
  } else {
    console.log('홀수입니다.')
  }
}

isEvenNumber(9); // false
isEvenNumber(2345422); // true




// Q3) 이름(string), 나이(number)를 입력 받아 person 인스턴스를 생성하는 Person 생성자 함수를 완성해주세요. (10점)
function Person(name, age) {
  // do something
  this.name = name;
  this.age = age;
}

const person = new Person('홍길동', 999);
console.log(person); // Person { name: '홍길동', age: 999 }



/*
  Q4) Animal 클래스를 extends한 Chicken 클래스를 작성해주세요. (20점)
  Chicken 클래스 constructor는 name(string), type(string)를 입력받아 Chicken 인스턴스를 생성합니다.
  Chicken 인스턴스는 Chicken 프로토타입으로부터 fly 메소드를 상속받습니다.
  fly 메소드는 'I believe I can fly' 텍스트를 출력합니다.

  제한사항: Class 문법만을 사용합니다.
*/

class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log('yum yum');
  }
}

class Chicken {
  // do something
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  eat() {
    console.log('yum yum');
  }
  fly() {
    console.log('I believe I can fly');
  }
}

const chicken = new Chicken('kyochon', 'red');
console.log(chicken); // Chicken { name: 'kyochon', type: 'red' }
chicken.eat(); // yum yum
chicken.fly(); // I believe I can fly
