/*
2. 나이에 따라 문자 출력하기 (10점)
입력되는 파라미터 n이 나이라고 했을 때, 입력되는 n에 따라 해당하는 문자열을 리턴하는 함수, printAge를 만들어주세요.

**출력예시**
* n이 1살 이상이고 19살 이하이면 "미성년자",
* n이 20살 이상이고 64살 이하이면 "성인",
* n이 65살 이상이면 "노인",
* n이 1 이상 120 이하가 아닌 경우 "출력할 수 없습니다"라는 문자열을 출력합니다.
*/

function printAge(n) {
  let answer = "";
  // 코드 작성
  if (n <= 0 || n > 120) {
    answer = "출력할 수 없습니다";
  }
  else if (n <= 19) {
    answer = "미성년자";
  }
  else if (n <= 64) {
    answer = "성인";
  }
  else {
    answer = "노인";
  }
  return answer;
}

console.log(printAge(0)); // 출력할 수 없습니다
console.log(printAge(10)); // 미성년자
console.log(printAge(20)); // 성인
console.log(printAge(64)); // 성인
console.log(printAge(65)); // 노인
console.log(printAge(120)); // 노인
console.log(printAge(121)); // 출력할 수 없습니다
