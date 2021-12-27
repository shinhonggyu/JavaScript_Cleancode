const STATUS = Object.freeze({
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL',
  OPTIONS: {
    GREEN: 'GREEN',
    RED: 'RED',
  },
});

Object.isFrozen(STATUS); // true

// shallow copy vs deep copy
Object.isFrozen(STATUS.OPTIONS); // false

/* 중첩 딥프리징
1. 대중적인 유틸 라이브러리 (lodash⭐)
2. 직접 유틸 함수 생성
3. stackoverflow
4. TypeScript => readonly
*/
function deepFreeze(targetObj) {
  // 1. 객체를 순회  
  // 2. 값이 객체인지 확인  
  // 3. 객체이면 재귀
  // 4. 그렇지 않으면 Object.freeze()
  Object.keys(targetObj).forEach(key => {
    if (/* 객체가 맞다면 */) {
      deepFreeze(targetObj[key])
    }
  })

  return Object.freeze(targetObj)
}

