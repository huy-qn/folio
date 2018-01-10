import React, { Component } from 'react';
import Navigation from './Navigation';
import Main from './Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="sans-serif">
        <Navigation/>
        <Main/>
      </div>
    );
  }
}

export default App;
