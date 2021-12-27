// void & return
// case1
function handleClick() {
  return setStatue(false);
}

function showAlert(message) {
  return alert(message);
}

function test(sum1, sum2) {
  const result = sum1 + sum2;
}

function testVoidFunc() {
  return test(1, 2);
}

function testVoidFunc2() {
  const arr = [1, 2];
  return arr.push(10);
}

testVoidFunc(); // undefined
testVoidFunc2(); // 3

//case2
function isAdult(age) {
  return age > 19;
}

function getUserName(name) {
  return '유저' + name;
}
