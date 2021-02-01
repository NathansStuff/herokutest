import React, { Fragment, Component } from 'react';
import './home.scss';
import Hero from '../../components/hero/hero';
import About from '../../components/about/about';

export default class HomePage extends Component {
  constructor(props){
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
   
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }

  render() {
    return (
    <div>
      <Fragment>
        <Hero />
        <About />
      </Fragment>
      Status: {this.props.loggedInStatus}
    </div>
    );
  };

}
