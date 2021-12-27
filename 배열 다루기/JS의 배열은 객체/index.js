// JavaScript의 배열은 객체다.

const arr = [1, 2, 3];

arr[3] = 'test';
(arr['property'] = 'string value'), (arr['obj'] = {});
arr[{}] = [1, 2, 3];
arr['func'] = function () {
  return 'hello';
};

const arr = {
  0: 1,
  1: 2,
  2: 3,
};

// case2
const arr = [1, 2, 3];

if (arr.length) {
  console.log('배열 확인');
}

if (typeof arr === 'object') {
  console.log('배열 확인');
}

Array.isArray(arr); // true
