import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import NewTransaction from './NewTransaction';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/new" component={NewTransaction} />
        </Switch>
      </main>
    );
  }
}

export default Main;
