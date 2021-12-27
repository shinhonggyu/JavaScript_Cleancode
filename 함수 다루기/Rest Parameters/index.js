// Rest Parameters

// function sumTotal() {
//   return Array.from(arguments).reduce((acc, curr) => {
//     console.log(acc, curr);
//     acc + curr;
//   });
// }

function sumTotal(initValue, ...args) {
  return args.reduce((acc, curr) => acc + curr, initValue);
}

sumTotal(100, 1, 2, 3, 4, 5);
