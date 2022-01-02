/*
 * 매개변수의 순서가 경계따
 *
 * 호출하는 함수의 네이밍과 인자의 순서의 연관성을 고려한다.
 * 1. 매개변수를 2개가 넘지 않도록 만든다.
 * 2. arguments, rest parameter
 * 3. 매개변수를 객체에 담아서 넘긴다.
 * 4. 랩핑하는 함수
 */

function someFunc(someArg, someArg) {}

genRandomNumber(1, 50);
getDates('2021-10-01', '2021-10-31');
genRandomNumber(1, 5);

// 객체로받는다
// 나머지매개변수 사용한다 Rest Parameters
