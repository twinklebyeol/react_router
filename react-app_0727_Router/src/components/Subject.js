import React, { Component } from 'react';

class Subject extends Component {
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
      <Subject title="잠와...=_=" sub="으아아아아"></Subject>
      <Subject title="잘 동작하니?" sub="으랏챠챠챠챠챠"></Subject>
      {/* <Tod />
      <Content /> */}
    </div>
  );
}

export default App;
