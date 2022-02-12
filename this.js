// 일반 function 안에서의 this값은 함수호촐부에따라서 항상 새롭게 정의된다
// arrow function 과 call,apply,bind 쓸수있음
//  strict mode일 때 함수 안에서 쓰면 this는 undefined

this; // window

function a() {
  this; // window
}

window.a(); // window

const obj = {
  name: "shin",
  function() {
    this;
  },
};

obj.function(); // obj
