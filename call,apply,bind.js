/*
call, aplly, bind:
함수 호출 방식과 관계없이 함수에 this값를 지정할 수 있음
* call - 모든 함수에서 사용할 수 있으며 this를 특정 값으로 지정 할수있다
*/

const mike = {
  name: 'Mike',
};

const tom = {
  name: 'Tom',
};

function showThisName() {
  console.log(this.name);
}

showThisName(); // window.name ""
// this로 사용할 객체를 넘김
// 해당함수가 주어진 객체의 메소드인것처럼 사용
showThisName.call(mike);

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

update.call(mike, 1999, 'singer');

update.apply(tom, [2002, 'teacher']);
// apply는 배열 요소를 함수 매게변수로 사용할때 유용하다
const minNum = Math.min(3, 10, 1, 6, 4);
const maxNum = Math.max(3, 10, 1, 6, 4);

const nums = [3, 10, 1, 6, 4];
const minNum = Math.min(nums); // NaN
const maxNum = Math.max(...nums); // 10

// apply는 두번째 매개변수로 배열을 전달하면 그 요소들을 차례대로 인수로 사용한다.
const minNum = Math.min.apply(null, nums);
const maxNum = Math.max.call(null, ...nums);

const mike = {
  name: 'Mike',
};

// 함수의 this값을 영구히 바꾸는 bind
function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

const updateMike = update.bind(mike);

updateMike(1980, 'police');

// 실전 예제
const user = {
  name: 'Mike',
  showName: function () {
    console.log(`hello, ${this.name}`);
  },
};

user.showName(); // hello, Mike

// this를 잃어버림
let fn = user.showName;
fn(); // hello,
fn.call(user); // hello, Mike
fn.apply(user); // hello, Mike

let boundFn = fn.bind(user);

boundFn(); // hello, Mike
