
function printTriangle(n) {
  // do something
  let result = '';
  for (let i = 0; i < n && n > 1; i++) {
      for (let j = 0; j <= i; j++) {
          result += '*';
      }
      result += '\n';
  }
  console.log(result);
}

printTriangle(5);
printTriangle(2);