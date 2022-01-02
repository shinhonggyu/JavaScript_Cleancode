/* 
부정조건문 지양하기
  1. 생각을 여러번 해야 할수있다.
  2. 프로그래밍 언어 자체로 if문이 처음부터오고 true부터 실행 시킨다.
*/
/*
부정조건문 사용할때
  * 1. Early Return
  * 2. Form Validation
  * 3. 보안 혹은 검사하는 로직
**/
// 헷갈립
if (!isNaN(3)) {
  console.log('부정조건문 지양하기');
}
// 숫자일때만
function isNumber(num) {
  return !Number.isNaN(num) && typeof num === 'number';
}
