import React, { Component } from 'react';
import Navigation from './Navigation';
import Main from './Main';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        balance:
          [
            ["2018-01-01 00:00:00 UTC", 120],
            ["2018-01-02 00:00:00 UTC", 120 * 2],
            ["2018-01-03 00:00:00 UTC", 120 * 6],
            ["2018-01-04 00:00:00 UTC", 120 * -12],
            ["2018-01-05 00:00:00 UTC", 120 * 9],
            ["2018-01-06 00:00:00 UTC", 120 * 25]
          ]
        ,
        holdings: [
          {
            id: 'bitcoin',
            amount: 1
          },
          {
            id: 'ripple',
            amount: 500
          },
          {
            id: 'sumokoin',
            amount: 35
          }
        ]
      }
    }
  }
  render() {
    return (
      <div className="sans-serif">
        <Navigation/>
        <Main data={this.state.data}/>
      </div>
    );
  }
}

export default App;
