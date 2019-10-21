import React, { Component } from 'react';

import Header from './Header.js'
import NodeList from './NodeList.js'


class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <NodeList />
      </div>
    );
  }
}

export default App;
