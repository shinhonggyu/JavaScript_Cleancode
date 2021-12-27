// 배열 요소에 접근하기

// case3
function formatDate(targetDate) {
  const date = targetDate.toISOString().split('T')[0];
  console.log(date);
  const [year, month, day] = date.split('-');

  return `${year}년 ${month}월 ${day}일`;
}

function formatDate(targetDate) {
  const [date] = targetDate.toISOString().split('T');

  const [year, month, day] = date.split('-');

  return `${year}년 ${month}월 ${day}일`;
}

// lodash util함수
function head(arr) {
  return arr[0] ?? '';
}

function formatDate(targetDate) {
  const date = head(targetDate.toISOString().split('T'));

  const [year, month, day] = date.split('-');

  return `${year}년 ${month}월 ${day}일`;
}
