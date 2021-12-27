// default value
// case1
function createCarousel({
  margin = 0,
  center = false,
  navElement = 'div',
} = {}) {
  return {
    margin,
    center,
    navElement,
  };
}

createCarousel();

// case2
const required = (argName) => {
  throw new Error('required is ' + argName);
};

function createCarousel({
  items = required('items'),
  margin = 0,
  center = false,
  navElement = 'div',
} = {}) {
  // .. some code.
  return {
    margin,
    center,
    navElement,
  };
}

createCarousel({
  margin: 10,
  center: true,
  navElement: 'span',
});
