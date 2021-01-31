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