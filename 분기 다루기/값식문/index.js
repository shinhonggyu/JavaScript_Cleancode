// case 1
// This JSX:
ReactDOM.render(
  <div id="msg">Hello World!</div>, //
  mountNode
);

// Is transformed to this JS:
ReactDOM.render(
  React.createElement('div', { id: 'msg' }, 'Hello World'),
  mountNode
);

// -----------------------------------------------------------

// case2
// This JSX:
<div id={if (condition) { 'msg' }} >Hello World!</div>

// Is transformed to this JS:
React.createElement('div', {id: if (condition) { 'msg' }}, 'Hello World!')

ReactDOM.render(
  <div id={condition ? 'msg' : null} >Hello World!</div>,
  mountNode
)

// -----------------------------------------------------------

// case3
function ReactComponent() {
  return (
    <section>
      <h1>Color</h1>
      <h3>Name</h3>
      <p>{this.state.color || 'white'}</p>
      <h3>Hex</h3>
      <p>
        {(() => {
          switch (this.state.color) {
            case 'red':
              return '#FF0000';
            case 'green':
              return '#00FF00';
            case 'blue':
              return '#0000FF';
            default: 
              return '#FFFFFF' 
          }
        })()}
      </p>
    </section>
  )
}

// -----------------------------------------------------------

// case4
function ReactComponent() {
  return (
    <tbody>
      {(() => {
        const rows = [];

        for (let i = 0; i < objectRows.length; i++) {
          rows.push(<ObjectRow key={i}, data={objectRows[i]} />)
        }
        return rows
      })()}
      {objectRows.map((obj, i) => (
        <ObjectRow key={i} data={obj} />
      ))} 값,식
    </tbody>
  )
}

// -----------------------------------------------------------

// case5
function ReactComponent() {
  return (
    <div>
      {(() => {
        if (conditionOne) return <span>One</span>;
        if (conditionTwo) return <span>Two</span>;
        else conditionOne;
        return <span>Three</span>
      })()}
      // 값, 식
      { conditionOne && <span>One</span> }
      { conditionTwo && <span>Two</span> }
      { !conditionTwo && <span>Three</span> }
    </div>
  )
}