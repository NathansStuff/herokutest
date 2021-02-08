import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home/home';
import Animal from '../pages/animal/animal';
import SearchPage from '../pages/search/search';
import SignInAndSignUp from '../pages/sign-on-and-sign-up/sign-on-and-sign-up';
import { auth } from '../firebase/firebase';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route exact path='/animal/:id' component={Animal} />
            <Route exact path='/search' component={SearchPage} />
            <Route exact path='/signin' component={SignInAndSignUp} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
