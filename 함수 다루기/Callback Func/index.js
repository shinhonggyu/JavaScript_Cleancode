// Callback Function
someElement.addEventListener('click', callback);

DOM.prototype.addEventListener = function (eventType, cbFunc) {
  if (eventType === 'click') {
    const clickEventObject = {
      target: {},
    };

    cbFunc(clickEventObject);
  }
};

// case1
function register() {
  const isConfirm = confirm('회원가입에 성공했습니다.');

  if (isConfirm) {
    redirectUserInfoPage();
  }
}

function login() {
  const isConfirm = confirm('로그인에 성공했습니다.');

  if (isConfirm) {
    redirectIndexPage();
  }
}

function confirmModal(message, cbFunc) {
  const isConfirm = confirm(message);

  if (isConfirm && cbFunc) {
    cbFunc();
  }
}
