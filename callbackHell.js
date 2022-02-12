/*
callback1(function(value1) {
  callback2(value1, function(value2) {
    callback3(value2, function(value3) {
      callback4(value3, function(value4) {
        callback5(value4, function(value5) {
            // value5를 사용하는 처리
        });
      });
    });
  });
});
*/

// 어떤일이 완료된이후 실행되는 callback함수
const f1 = (callback) => {
  setTimeout(() => {
    console.log("1번 주문 완료");
    callback();
  }, 1000);
};

const f2 = (callback) => {
  setTimeout(() => {
    console.log("2번 주문 완료");
    callback();
  }, 3000);
};

const f3 = (callback) => {
  setTimeout(() => {
    console.log("3번 주문 완료");
    callback();
  }, 2000);
};

console.log("시작");
f1(function () {
  f2(function () {
    f3(function () {
      console.log("끝");
    });
  });
});
