const f1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('1번주문완료');
    }, 2000);
  });
};

const f2 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('2번주문완료');
    }, 3000);
  });
};

const f3 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('3번주문완료');
    }, 2000);
  });
};

console.log('시작');
Promise.all([f1(), f2(), f3()]).then((res) => console.log(res));

// f1()
//   .then((res) => f2(res))
//   .then((res) => f3(res))
//   .then((res) => console.log(res))
//   .catch(console.log)
//   .finally(() => {
//     console.log('끝');
//   });
