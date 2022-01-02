const isValidUser = true;
const isValidToken = true;

if (!(isValidUser && isValidToken)) {
  console.log('로그인 실패!');
}

/*
case1
if (A && B) {
  // 성공
}

if (!(A && B)) {
  // 실패
}

if (!A || !B)) {
  // 실패
}

case2
if (A || B) {
}

if (!(A || B)) {
}

if (!A && !B) {
}
*/
