import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0
  };

  componentDidMount() {
    fetch('http://localhost:3001/count')
      .then(res => res.json())
      .then(data => {
        this.setState({ count: data.count });
      });
  }

  incrementCount = () => {
    fetch('http://localhost:3001/count', {
      method: 'POST'
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ count: data.count });
      });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default App;
