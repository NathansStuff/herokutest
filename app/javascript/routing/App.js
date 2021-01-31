import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Animals from '../pages/animals/animals';
import Animal from '../pages/animal/animal';
import Contact from '../pages/contact/contact';
import HomePage from '../pages/home/home';
import Login from '../pages/login/login';
import Signup from '../pages/signup/signup';

export default class App extends Component {
  render(){
    return (
     <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/animal/:id' component={Animal} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/animals' component={Animals} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
};


