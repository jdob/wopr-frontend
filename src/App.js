import React, { Component } from 'react';

import Header from './Header.js'
import NodeList from './NodeList.js'


class App extends Component {

  mode() {
    return process.env.REACT_APP_MODE || 'light'
  }

  render() {
    return (
      <div className={"container-" + this.mode()}>
        <Header />
        <NodeList />
      </div>
    );
  }
}

export default App;
