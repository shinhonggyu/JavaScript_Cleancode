const car = {
  wheels: 4,
  drive() {
    console.log('drive..');
  },
};

const bmw = {
  color: 'red',
  navigation: 1,
};

const benz = {
  color: 'black',
};

const audi = {
  color: 'blue',
};
// car는 bmw의 prototype
// bmw는 car의 상속을받음
bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;

// case2
// const car = {
//   wheels: 4,
//   drive() {
//     console.log('drive..');
//   },
// };

const Bmw = function (color) {
  this.color = color;
};

// 생성자함수가 생성하는 객체에 __proto__를 설정
Bmw.prototype.wheels = 4;
Bmw.prototype.drive = function () {
  console.log('drive..');
};
Bmw.prototype.navigation = 1;
Bmw.prototype.stop = function () {
  console.log('STOP');
};

const x5 = new Bmw('red');
const z4 = new Bmw('blue');

// x5.__proto__ = car;
// z4.__proto__ = car;
