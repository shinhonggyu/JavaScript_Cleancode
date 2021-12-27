function Person({ name, age, location }) {
  this.name = name;
  this.age = age ?? 30;
  this.location = location ?? 'korea';
}

const poco = new Person({
  name: 'poco',
  age: 30,
  location: 'korea',
});

// case2
const orders = ['First', 'Second', 'Third'];

const [first, , third] = orders;

const { 0: st2, 2: rd2 } = orders;
console.log(st2); // First
console.log(rd2); // Third

// case3
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;

ReactDOM.render(element, document.getElementById('root'));
