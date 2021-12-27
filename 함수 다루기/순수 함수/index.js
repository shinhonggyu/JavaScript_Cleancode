// Pure Function 예층 가능한 함수
let num1 = 10;
let num2 = 20;

function impureFunc() {
  return num1 + num2;
}

impureFunc2(30); // 40

num1 = 100;

impureFunc2(30); // 130

function impureFunc2(newNum) {
  return num1 + newNum;
}

// 예측가능
function pureFunc(num1, num2) {
  return num1 + num2;
}

// case2
function changeValue(num) {
  num++;

  return num;
}

changeValue(1);

const obj = { one: 1 };
function changeObj(targetObj) {
  targetObj.one = 100;

  return targetObj;
}
// reference type 인 객체, 배열 => 새롭게 만들어서 반환
function changeObj(targetObj) {
  return { ...targetObj, one: 100 };
}

changeObj(100); // { one: 100 }

console.log(obj); // { one: 1 }
