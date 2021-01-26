import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Animals from '../pages/animals/animals';
import Animal from '../pages/animal/animal';
import Contact from '../pages/contact/contact';

const App = () => {
  return (
    
    <Switch>
      <Route exact path="/" component={Animals} />
      <Route exact path='/animal/:id' component={Animal} />
      <Route exact path='/contact' component={Contact} />
    </Switch>
  );
};

export default App;
