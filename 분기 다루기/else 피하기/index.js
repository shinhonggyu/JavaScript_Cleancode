function getActiveUserName(user) {
  if (user.name) {
    return user.name;
  } else {
    return '이름없음';
  }

  return '이름없음';

  return user.name || '이름없음';
}

// case2
// age가 20 미만시 특수 함수 실행
// 안녕하세요가 출력이 안된다.
function getHelloCustomer(user) {
  if (user.age < 20) {
    return report(user);
  } else {
    return '안녕하세요';
  }

  return '안녕하세요';
}
