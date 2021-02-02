import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Animals from '../pages/animals/animals';
import Animal from '../pages/animal/animal';
import HomePage from '../pages/home/home';
import Signin from '../pages/singin/signin';
import Signup from '../pages/signup/signup';
import SearchPage from '../pages/search/search';
import NewAnimal from '../pages/new-animal/new-animal'
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };

    
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  
  checkLoginStatus() {
    axios
      .get("http://localhost:3000/logged_in", { withCredentials: true })
      .then(response => {
        if (
          response.data.logged_in &&
          this.state.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user
          });
        } else if (
          !response.data.logged_in &
          (this.state.loggedInStatus === "LOGGED_IN")
        ) {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
          });
        }
      })
      .catch(error => {
        console.log("check login error", error);
      });
  }
  componentDidMount(){
    this.checkLoginStatus();
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    });
  }

    
  handleLogout(){
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    })
  }
  
  render(){
    return (
     <div>
        <BrowserRouter>
          <Switch>
            <Route exact 
              path='/' 
              render={props => (
             <HomePage {...props}  
             handleLogin={this.handleLogin} 
             handleLogout= {this.handleLogout}
             loggedInStatus={this.state.loggedInStatus} 
              />
            )} />
            <Route exact path='/animal/:id' component={Animal} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/animals' component={Animals} />
            <Route exact path='/signin' component={Signin} />
            <Route exact 
              path='/signup' 
              render={props => (
                <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus}  />
              )}  />
               <Route exact path='/newanimal' component={NewAnimal} />
               <Route exact path='/search' component={SearchPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

}
