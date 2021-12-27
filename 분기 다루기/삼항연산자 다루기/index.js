// 숏코딩 < 일관성, 3개의 '피'연산자❗

const { getSystemErrorName } = require('util');

// 조건 ? 참(식) : 거짓(식)
function example() {
  return condition1
    ? value1
    : condition2
    ? value2
    : condition3
    ? value3
    : value4;
}

function example() {
  if (condition1) {
    return value1;
  } else if (condition2) {
    return value2;
  } else if (condition3) {
    return value3;
  } else {
    return value4;
  }
}
// switch문으로 변경

// --------------------------

// case 2
const example = condition1 ? (a === 0 ? 'zero' : 'prositive') : 'negative';

// case3
const welcomeMessage = (isLogin) => {
  const name = isLogin ? getName() : '이름없음';

  return `안녕하세요 ${name}`;
};

const welcomeMessage = (isLogin) => {
  if (isLogin) {
    return `안녕하세요 ${getName()}`;
  }

  return `안녕하세요 이름없음`;
};

// case4
function alertMessage(isAdult) {
  isAdult // 참인 값혹은식, 거짓인 값혹은식이 아니다.
    ? alert('입장이 가능합니다.') // undefined
    : alert('입장이 불가능합니다.'); // undefined
  // 숏코딩써서 억지로 짧게하지말기.
  if (isAdult) {
    alert('입장이 가능합니다.');
  } else {
    alert('입장이 불가능합니다.');
  }
}

// 값을 반환할때
function alertMessage(isAdult) {
  return isAdult ? '입장이 가능합니다' : '입장이 불가능합니다';
}

// 삼항연사자 사용해서 무언가값을 만들고 변수로만들때
function alertMessage(isAdult) {
  const result = isAdult ? '입장이 가능합니다' : '입장이 불가능합니다';

  if (isAdult) {
    // some login
  }

  if (isAdult && gender === 'man') {
    // some login
  }
}

// 조건? X : 거짓
// 조건? 참 : X
// 삼항연산자말고 Truthy / Falsy
