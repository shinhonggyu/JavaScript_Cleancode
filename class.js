// 코딩앙마
// 생성자 함수
const User = function (name, age) {
  this.name = name;
  this.age = age;
  // this.showName = function () {
  //   console.log(this.name);
  // };
};

User.prototype.showName = function () {
  console.log(this.name);
};

const mike = new User("Mike", 30);

for (const p in mike) {
  console.log(p);
} // name age showName

// Calss
class User2 {
  // 객체를 만들어주는 생성자 메소드
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // User2의 prototype에 저장❗⭐
  showName() {
    console.log(this.name);
  }
}

const tom = new User2("Tom", 19);

for (const p in tom) {
  console.log(p);
} // name age

// --------- 상속 -----------
// 생성자함수는 prototype을 통해 상속을 구현
// class는 extends 키워드를 사용한다.

class Car {
  constructor(color) {
    // {}
    this.color = color;
    this.wheels = 4;
  }
  drive() {
    console.log("drive...");
  }
  stop() {
    console.log("STOP!");
  }
}

class Bmw extends Car {
  constructor(color) {
    super(color); // 부모클래스의 constructor 실행
    this.navigation = 1;
  }
  park() {
    console.log("PARK");
  }
  stop() {
    super.stop();
    console.log("OFF");
  }
}

const z4 = new Bmw("blue");
// { color: 'blue', wheels: 4, navigation: 1 }
// 메소드 오버라이딩
z4.stop(); // OFF
// 부모의 메소들을 그대로 사용하면서 확장하고싶을때 super
z4.stop(); // STOP! OFF

// -------------------------------------------------------

// case2 드림코딩
// Inheritance
// a way for one class to extend another class.

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  // 부모 메소드 호출하기
  draw() {
    super.draw();
    console.log("🔺");
  }
  // 메소드 오버라이딩
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

// --------------------------------------------------------------------

// Getter & Setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    console.log("getter");
    return this._age;
  }

  set age(value) {
    // if (value < 0) {
    //   throw new Error("age can not be begative");
    // }
    console.log("setter", value);
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Job", -1);
// user1 = { firstName: 'Steve', lastName: 'Job', _age: -1 }

// ----------------------------------------------------------

// Static properties and methods
class Article {
  publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  printPublisher() {
    console.log(this.publisher);
  }
}
