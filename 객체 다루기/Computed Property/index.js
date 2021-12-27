// case1
const [state, setState] = useState({
  name: '',
  password: '',
});

const handleChange = (e) => {
  setState({
    [e.target.name]: e.target.value,
  });
};

return (
  <React.Fragment>
    <input value={state.name} onChange={handleChange} name="name" />
    <input value={state.password} onChange={handleChange} name="password" />
  </React.Fragment>
);

// case2
const noop = createActions('INCREMENT');

const reducer = handleActions(
  {
    [noop]: (state, action) => ({
      counter: state.counter + action.payload,
    }),
  },
  { counter: 0 }
);

// case3
const funcName0 = 'func0';
const funcName1 = 'func1';
const funcName2 = 'func2';

const obj = {
  [funcName0]() {
    return 'func0';
  },
  [funcName1]() {
    return 'func1';
  },
  [funcName2]() {
    return 'func2';
  },
};

for (let i = 0; i < 3; i++) {
  console.log(obj['func' + i]());
}
