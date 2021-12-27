// hasOwnProperty

const person = {
  name: 'shin',
};

person.hasOwnProperty('name'); // true

const foo = {
  hasOwnProperty() {
    return 'hasOwnProperty';
  },
  bar: 'string',
};

foo.hasOwnProperty('bar'); // hasOwnProperty

Object.prototype.hasOwnProperty.call(foo, 'bar'); // true

function hasOwnProp(targetObj, targetProp) {
  return Object.prototype.hasOwnProperty.call(targetObj, targetProp);
}
