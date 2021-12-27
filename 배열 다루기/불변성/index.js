// 불변성 (immutable)
//  1. 배열을 복한다.
//  2. 새로운 배열을 반환하는 메서드들을 활용한다.
const originArray = ['123', '456', '789'];

const newArray = originArray;
originArray.push(10);
originArray.push(11);
originArray.push(12);
originArray.unshift(0);
