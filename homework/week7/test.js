function printTriangle(n) {
  let result = '';
  // do something
  for (var i = 0; i <= 10; i++) {
    for (var j = 0; j <= i; j++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);
}

printTriangle(2);
printTriangle(10);




//   var star = '';
// for (var i = 0; i <= 10; i++) {
//     for (var j = 0; j <= i; j++) {
//         star += '*';
//     }
//     star += '\n';
// }
// console.log(star);