import React, {Component} from 'react';
import Registration from '../../components/auth/registration';

import './signup.scss';

export default class Signup extends Component {
    constructor(props){
        super(props);

        this.handleSuccesfulAuth = this.handleSuccesfulAuth.bind(this);
    }

    handleSuccesfulAuth(data) {
        this.props.handleLogin(data);
        this.props.history.push("/");
    }


  render(){
    return( 
        <div>
            This is the signup page
            <Registration handleSuccesfulAuth={this.handleSuccesfulAuth} />

            Status: {this.props.loggedInStatus}
        </div>
    );
  };
}

