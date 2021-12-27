/* 배열 고차 함수
    1. 원화 표기
    2. 1000원 초과 리스트만 출력
    3. 가격 순 정렬
*/
const price = ['2000', '1000', '3000', '5000', '4000'];

// function getWonPrice(priceList) {
//   let temp = [];

//   for (let i = 0; i < priceList.length; i++) {
//     temp.push(priceList[i] + '원');
//   }

//   return temp;
// }

const suffixWon = (price) => price + '원';
const isOverOneThousand = (price) => parseInt(price) > 1000;
const ascendingList = (a, b) => a - b;

function getWonPrice(priceList) {
  const isOverList = priceList.filter(isOverOneThousand);
  const sortList = isOverList.sort(ascendingList);

  return sortList.map(suffixWon);
}

// 배열 메서드 체이닝 활용하기.
function getWonPrice(priceList) {
  return priceList //
    .filter(isOverOneThousand) // filter 조건 true값만
    .sort(ascendingList) // sort 정렬
    .map(suffixWon); // map 배열 요소들을 다시 정리
}
