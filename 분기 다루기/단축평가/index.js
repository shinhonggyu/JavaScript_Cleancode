// AND
true && true && '도달 0'; // '도달 0'
true && false && '도달 X'; // false

// OR
false || false || '도달 0'; // '도달 0'
true || true || '도달 X'; // true

// case 1
function fetchData() {
  if (state.data) {
    return state.data;
  } else {
    return 'Fetching...';
  }

  return state.data ? state.data : 'Fetching...';

  return state.data || 'Fetching..';
}

// case2
function favoriteDog(someDog) {
  // let favoriteDog;
  // if (someDog) {
  //   favoriteDog = someDog;
  // } else {
  //   favoriteDog = '냐옹';
  // }
  // return favoriteDog + '입니다';

  return (someDog || '냐옹') + '입니다';
}

favoriteDog(); // 냐옹입니다
favoriteDog('포메'); // 포메입니다

//case3
function getActiveUserName(user, isLogin) {
  if (isLogin) {
    if (user) {
      if (user.name) {
        return user.name;
      } else {
        return '이름없음';
      }
    } else {
      return '유저없음';
    }
  }
}

if (isLogin && user) {
  return user.name || '이름없음';
}
