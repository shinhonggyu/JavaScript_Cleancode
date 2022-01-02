/* 
런타임시(동작할 때) 선언과 최상단으로 끌어올려짐
  1. var x => let, const 지향
  2. 함수조심 => 함수 표현식
*/
var global = 0;

function outer() {
  console.log(global); // undefined
  var global = 5;

  function inner() {
    var global = 10;

    console.log(global); // 10
  }

  inner();

  global = 1;

  console.log(global); // 1
}
