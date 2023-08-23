import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <p>{this.props.sub}</p>
      </article>
    );
  }
}

function App() {
  return (
    <div className='App'>
      <Content title="잠와...=_=" sub="으아아아아"></Content>
      <Content title="잘 동작하니?" sub="으랏챠챠챠챠챠"></Content>
      {/* <Tod />
      <Content /> */}
    </div>
  );
}

export default App;
