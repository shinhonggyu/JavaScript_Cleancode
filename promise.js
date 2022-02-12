/*
프로미스를 알아야 하는 이유
  *웹서버와 통신하는 로직을 만들고 싶다면 
  *일정 시간 후에 동작하는 기능을 만들고 싶다면 
  *서버에 요청한 데이터를 이용해서 사용자에게 더 나은 경험을 만들고 싶다면 
  *웹페이지를 웹어플리케이션으로 만들고 싶다면
*/

const f1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("1번주문완료");
    }, 2000);
  });
};

const f2 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("2번주문완료");
    }, 3000);
  });
};

const f3 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("3번주문완료");
    }, 2000);
  });
};

console.log("시작");
// Promise.all([f1(), f2(), f3()]).then((res) => console.log(res));

f1()
  .then((res) => f2(res))
  .then((res) => f3(res))
  .then((res) => console.log(res))
  .then(console.log("hi"))
  .then(console.log("hoho"))
  .catch(console.log)
  .finally(() => {
    console.log("끝");
  });
