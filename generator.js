function* gen1() {
  yield 'W';
  yield 'o';
  yield 'r';
  yield 'l';
  yield 'd';
}

function* gen2() {
  yield 'Hello,';
  yield* gen1();
  yield '!';
}

console.log(...gen2());
