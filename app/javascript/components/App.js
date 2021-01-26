import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Animals from './animals/animals';
import Animal from './animal/animal';

const App = () => {
  return (
    
    <Switch>
      <Route exact path="/" component={Animals} />
      <Route exact path='/animal/:id' component={Animal} />
    </Switch>
  );
};

export default App;
