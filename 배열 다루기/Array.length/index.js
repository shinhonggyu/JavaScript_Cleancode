// Array.length

const arr = [1, 2, 3];

// console.log(arr.length);

arr.length = 10;

// console.log(arr.length);

// -------------------------------------

// case2
const arr [1,2,3]

arr[3] = 4;

arr.length // 4

arr[9] = 10;

// 마지막 요소의 인덱스가 array의 length
arr.length // 10

// ----------------------------------------

// case3

Array.prototype.clear = function() {
  this.length = 0;
}

function clearArray(array) {
  array.length = 0;

  return array
}

const arr = [1,2,3]
arr.clear()
// arr []
// clearArray(arr) []