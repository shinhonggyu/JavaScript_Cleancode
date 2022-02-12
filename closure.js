/* 
어휘적 환경 (Lexical Environment)
함수와 렉시컬 환경의 조합
함수가 생성될 당시의 외부 변수를 기억
생성 이후에도 계속 접근 가능
외부함수 실행이 끝나서 소멸된이후에도
내부함수가 외부함수위 변수에 접근가능
*/
let one;
one = 1;

function addOne(num) {
  console.log(one + num);
}

addOne(5);

// case2
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add3 = makeAdder(3);
add3(2); // 5

const add10 = makeAdder(10);
add10(5); // 15
add3(1); // 4

// case3
function makeCounter() {
  let num = 0;

  return function () {
    return num++;
  };
}

let counter = makeCounter();
counter(); // 0
counter(); // 1
counter(); // 2
