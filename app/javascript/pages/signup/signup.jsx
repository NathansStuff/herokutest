import React, {Component} from 'react';
import Registration from '../../components/auth/registration';
import Login from  '../../components/login/login';
import './signup.scss';

export default class Signup extends Component {
    constructor(props){
        super(props);

        this.handleSuccesfulAuth = this.handleSuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth(data) {
        this.props.handleLogin(data);
        this.props.history.push("/");
    }


  render(){
    return( 
        <div>
            This is the signup page
            <Registration handleSuccesfulAuth={this.handleSuccessfulAuth} />
            <Login handleSuccessfulAuth={this.handleSuccessfulAuth}/>

            Status: {this.props.loggedInStatus}
        </div>
    );
  };
}

