import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import NewTransaction from './NewTransaction';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
            <Route exact path="/" render={() => <Home data={this.props}/>}/>
            <Route path="/new" render={() => <NewTransaction data={this.props}/>} />
        </Switch>
      </main>
    );
  }
}

export default Main;
