function loginService(isLogin, user) {
  if (!isLogin) {
    // 로그인 여부 체크
    if (checkToken()) {
      // Token존재 여부 체크
      if (!user.nickName) {
        // 기가입 유저인지 체크
        return registerUser(user);
      } else {
        refreshToken();

        return '로그인 성공';
      }
    } else {
      throw new Error('No Token');
    }
  }
}

function login() {
  refreshToken();

  return '로그인 성공';
}

function loginService(isLogin, user) {
  // Early Return
  // 함수를 미리 종료
  // 사고하기 편하다.
  if (isLogin) {
    return;
  }

  if (!checkToken()) {
    throw new Error('No Token');
  }

  if (!user.nickName) {
    return registerUser(user);
  }

  // login분리 추상화
  login();
}

// case2
function 오늘하루(condition, weather, isJob) {
  if (condition === 'GOOD') {
    공부();
    게임();
    유튜브보기();

    if (weather === 'GOOD') {
      운동();
      빨래();
    }

    if (isJob === 'GOOD') {
      야간업무();
      조기취침();
    }
  }
}

function 오늘하루(condition, weather, isJob) {
  if (condition !== 'GOOD') {
    return;
  }

  공부();
  게임();
  유튜브보기();

  if (weather === 'GOOD') {
    운동();
    빨래();
  }

  if (isJob === 'GOOD') {
    야간업무();
    조기취침();
  }
}
