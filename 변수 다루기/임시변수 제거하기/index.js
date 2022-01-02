/* 
* 임시변수 제거!
  1. 명령형으로 가득한 로직
  2. 어디서 어떻게 ? 디버깅 힘듬
  3. 추가적인 코드를 작성.. 유혹
  4. 함수를 하나의 역할만 하게 해야하함

* 해결책
  함수나누니
  바로 반환
  고차함수 (map, filter, reduce)
  선언형 
*/

function getElements() {
  const result = {};

  result.title = document.querySelector('.title');
  result.text = document.querySelector('.text');
  result.value = document.querySelector('.value');

  return result;
  // 바로 리턴 함으로써 CRUD(접근 로직) 최소화❗
}

// case2
function getDateTime(targetDate) {
  let month = targetDate.getMonth();
  let day = targetDate.getDate();
  let hour = targetDate.getHours();

  month = month >= 10 ? month + 1 : '0' + (month + 1);
  day = day >= 10 ? day : '0' + day;
  hour = hour >= 10 ? hour : '0' + hour;

  return {
    month,
    day,
    hour,
  };
}
/* 
이 함수가 할 수없는 추가적인 스펙이 생길때 문제가 생긴다
1. 함수 추가
2. 함수를 유지보수하며 수정
*/
function getDateTime(targetDate) {
  const month = targetDate.getMonth();
  const day = targetDate.getDate();
  const hour = targetDate.getHours();

  return {
    month: month >= 10 ? month + 1 : '0' + (month + 1),
    day: day >= 10 ? day : '0' + day,
    hour: hour >= 10 ? hour : '0' + hour,
  };
}

// 함수를 한 번 더 추상화하여 재활용⭐
// 임시변수라는 유혹에 빠져 임시 변수만 계속 내부에서 조작하는것을 방지⭐
function getDateTime2() {
  const currentDateTime = getDateTime(new Date());
  // CRUD (접근 로직) 최소화❗
  // 또 하나의함수 computedKrDate가정
  return {
    month: computedKrDate(currentDateTime.month + '월 전'),
    day: currentDateTime.day + '일 전',
    hour: currentDateTime.hour + '시간 전',
  };
}
