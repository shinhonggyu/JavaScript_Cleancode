// Nullish coalescing operator
// Null 병합연산자

function createElement(type, height, width) {
  const element = document.createElement(type || 'div');

  element.style.height = String(height || 10) + 'px';
  element.style.width = String(width || 10) + 'px';

  return element;
}

// case2
function helloWorld(message) {
  if (!message) {
    return 'Hello! World';
  }

  return 'Hello' + (message || 'World');
}

function helloWorld(message) {
  return 'Hello' + (message || 'World');
}

// case3
function getUserName(isLogin, user) {
  return isLogin && user ?? user.name
}