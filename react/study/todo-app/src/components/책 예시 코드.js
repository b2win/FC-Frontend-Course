const array = [1, 2, 3, 4, 5];

const nextArrayBad = array; // 배열을 복사하는게 아니라 똑같은 배열을 가리킴.
nextArrayBad[0] = 100;
console.log(array === nextArrayBad); // true 완전히 같은 배열 임.

const nextArrayGood = [...array];
nextArrayGood[0] = 100;
console.log(array === nextArrayGood); // false 다른 배열 임.

const object = {
  foo: 'bar',
  value: 1,
};

const nextObjectBad = object; // 객체가 복사되지 않고, 똑같은 객체를 가리킴.
nextObjectBad.value = nextObjectBad.value + 1;
console.log(object === nextObjectBad); // true 같은 객체 임.

const nextObjectGood = {
  ...object, // 기존에 있던 내용을 모두 복사해서 넣음.
  value: object.value + 1, // 새로운 값을 덮어 씀.
};
console.log(object === nextObjectGood); // false 다른 객체 임.

const todos = [
  { id: 1, checked: true },
  { id: 2, checked: true },
];
const nextTodos = [...todos];

nextTodos[0].checked = false;
console.log(todos[0] === nextTodos[0]); // true 똑같은 객체를 가리킴.

nextTodos[0] = {
  ...nextTodos[0],
  checked: false,
};
console.log(todos[0] === nextTodos[0]); // false 새로운 객체를 할당 함.

const nextComplexObject = {
  ...complexObject,
  objectInside: {
    ...complexObject.objectInside,
    enabled: false,
  },
};
console.log(complexObject === nextComplexObject); // false
console.log(complexObject.objectInside === nextComplexObject.objectInside); // false
