import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import NewTransaction from './NewTransaction';

const Main = ( {data} ) => {
  return (
    <main>
      <Switch>
          <Route exact path="/" component={() => <Home data={data}/>} />
          <Route path="/new" component={NewTransaction} />
      </Switch>
    </main>
  );
};

export default Main;
