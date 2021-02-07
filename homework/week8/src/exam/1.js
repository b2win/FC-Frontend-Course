/*
1. 수박수박수박수박수박수? (10점)
길이가 n이고, 수박수박수박수...와 같은 패턴을 유지하는 문자열을 리턴하는 함수 waterMelon을 만들어주세요.

**출력예시**
* n이 3일 때 '수박수'
* n이 4일 때 '수박수박'
*/

function waterMelon(n) {
  let answer = "";
  // 코드 작성
  
  for (let i = 0; i < n; i++) {
    answer += i % 2 === 0 ? "수" : "박";
  }
  return answer;
}

console.log(waterMelon(3)); // 수박수
console.log(waterMelon(4)); // 수박수박
