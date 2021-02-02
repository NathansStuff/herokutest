import React, { Fragment, Component } from 'react';
import './home.scss';
import Hero from '../../components/hero/hero';
import About from '../../components/about/about';
import axios from "axios"

export default class HomePage extends Component {
  constructor(props){
    super(props);

    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }

 
  handleLogoutClick(){
    axios.delete("http://localhost:3000/logout", {withCredentials: true}).then(response=>{
    this.props.handleLogout();;      
    }).catch(error => {
      console.log("logout error", error);
    })

    this.props.handleLogout();
  }

 

  render() {
    return (
    <div>
      <Fragment>
        <Hero />
        <About />
      </Fragment>
      Status: {this.props.loggedInStatus}

      <button onClick={() => this.handleLogoutClick()}>Logout</button>
    </div>
    );
  };

}
