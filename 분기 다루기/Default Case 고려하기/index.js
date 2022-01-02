// case1
function sum(x, y) {
  x = x || 1;
  y = y || 1;

  return x + y;
}

sum();

// case2
function createElement(type, height, width) {
  const element = document.createElement(type || 'div');

  element.style.height = height || '100';
  element.style.width = width || '100';

  return element;
}

createElement();

// case3
function registerDay(userInputDay) {
  switch (userInputDay) {
    case '월요일': // some code
    case '화요일': // some code
    case '수요일': // some code
    case '목요일': // some code
    case '금요일': // some code
    case '토요일': // some code
    case '일요일': // some code
    default:
      throw new Error('입력값이 유효하지 않습니다');
  }
}
e.target.value = '월ㄹ요일';
registerDay(e.target.value);

// case4
const Root = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/welcome" component={Welcome} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

// case5
function safeParseInt(number, radix) {
  return parseInt(number, radix || 10);
}
