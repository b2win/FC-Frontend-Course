/*
3. 중복 요소 제거하기 (10점)
입력된 배열의 요소 중에서 2개 이상 중복되는 숫자가 있을 경우 중복을 제거하고 유니크한 숫자만을 가진 배열을 리턴하는 함수를 만들어주세요.

**구현조건**
* for문은 사용하지 않습니다.
*/

function uniqArray(array) {
  let answer = [];
  // 코드 작성
  let uniqanswer = [... new Set (uniqArray)]
  
  return answer;
}

console.log(uniqArray([2, 1, 2, 3, 4, 3, 4])); // [ 2, 1, 3, 4 ]
