import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Animals from '../pages/animals/animals';
import Animal from '../pages/animal/animal';
import Contact from '../pages/contact/contact';
import HomePage from '../pages/home/home';
import SearchPage from '../pages/search/search';
import NewAnimal from '../pages/new-animal/new-animal'

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/animal/:id' component={Animal} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/animals' component={Animals} />
      <Route exact path='/search' component={SearchPage} />
      <Route exact path='/newanimal' component={NewAnimal} />
    </Switch>
  );
};

export default App;
