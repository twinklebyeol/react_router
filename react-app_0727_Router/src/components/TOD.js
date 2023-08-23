import React, { Component } from 'react';

class TOD extends Component {
  render() {
    return (
      <header>
        <h2>{this.props.title}</h2>
        <p>{this.props.sub}</p>
      </header>
    );
  }
}

function App() {
  return (
    <div className='App'>
      <TOD title="잠와...=_=" sub="으아아아아"></TOD>
      <TOD title="잘 동작하니?" sub="으랏챠챠챠챠챠"></TOD>
      {/* <Tod />
      <Content /> */}
    </div>
  );
}

export default App;
