// 유사 배열 객체
const arrayLikeObject = {
  0: 'HELLO',
  1: 'WORLD',
  length: 2,
};

const arr = Array.from(arrayLikeObject);
console.log(arr); // ['HELLO', 'WORLD']
Array.isArray(arrayLikeObject); // false
Array.isArray(arr); // true

function generatePriceList() {
  return Array.from(arguments).map((arg) => arg + '원');
}

const newList = generatePriceList(100, 200, 300);
// ['100원', '200원', '300원']
