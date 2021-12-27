const x = 1;

if (x >= 0) {
  console.log('x는 0과 같거나 크다'); // 'x는 0과 같거나 크다'
} else if (x > 0) {
  console.log('x는 0보다 크다');
}

if (x >= 0) {
  console.log('x는 0과 같거나 크다'); //  'x는 0과 같거나 크다'
} else {
  if (x > 0) {
    console.log('x는 0보다 크다');
  }
}
// else if 를 안쓰거나 switch문으로 대체.

if (x >= 0) {
  console.log('x는 0과 같거나 크다'); //  'x는 0과 같거나 크다'
}

if (x > 0) {
  console.log('x는 0보다 크다'); // 'x는 0보다 크다'
}
