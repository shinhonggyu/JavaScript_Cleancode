const { errorMonitor } = require('events');

function add(num1) {
  return function sum(num2) {
    return num1 + num2;
  };
}

const addOne = add(1);
const addTwo = add(2);

// --------------------------------------

// case2
function add(num1) {
  return function (num2) {
    return function (calculateFn) {
      return calculateFn(num1, num2);
    };
  };
}

function sum(num1, num2) {
  return num1 + num2;
}

function multiple(num1, num2) {
  return num1 * num2;
}

const addOne = add(5)(2);
const sumAdd = addOne(sum); // 7
const sumMultiple = addOne(multiple); // 10

// ----------------------------------------

// case3
function log(value) {
  return function (fn) {
    fn(value);
  };
}

const logoFoo = log('foo');

logoFoo((v) => console.log(v));
logoFoo((v) => console.info(v));
logoFoo((v) => console.error(v));
logoFoo((v) => console.warn(v));

// --------------------------------------------

// case4
const arr = [1, 2, 3, 'A', 'B', 'C'];

function isTypeOf(type) {
  return function (value) {
    return typeof value === type;
  };
}

const isNumber = isTypeOf('number');
const isString = isTypeOf('string');

arr.filter(isNumber);
arr.filter(isString);

// ------------------------------------------

// case5
function fetcher(endpoint) {
  return function (url, options) {
    return fetch(endpoint + url, options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res.error);
        }
      })
      .catch((err) => console.log(err));
  };
}

const naverApi = fetcher('http://naver.com');
const daumApi = fetcher('http://daum.com');

daumApi('/webtoon').then((res) => res);
naverApi('/webtoon').then((res) => res);

// ------------------------------------

// case6
someElement.addEventListener(
  'click', //
  debounce(handleClick, 500)
);
