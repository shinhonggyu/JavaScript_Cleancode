// Arrow Function
// case1
const user = {
  name: 'Poco',
  getName: () => {
    return this.name;
  },
  newFriends: () => {
    // call, apply, bind
    const newFriendList = Array.from(arguments);

    return this.name + newFriendList;
  },
};

user.getName(); // undefined

// case2
const Person = (name, city) => {
  this.name = name;
  this.city = city;
};

const person = new Person('poco', 'korea');

// case3
class Parent {
  parentMethod() {
    console.log('parentMethod'); //parentMethod
  }

  parentMethodArrow = () => {
    console.log('parentMethodArrow');
  };

  overrideMethod = () => {
    return 'Parent';
  };
}

class Child extends Parent {
  childMethod() {
    super.parentMethod();
  }

  overrideMethod() {
    return 'Child';
  }
}

new Child.childMethod();
new Child.overrideMethod();

// case4
function* gen() {
  yield () => ?? //x
  yield function name() {
    
  }
}