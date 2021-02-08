import React from 'react';
import FormInput from '../form-input/form-input';
import './sign-in.scss';
import { signInWithGoogle } from '../../firebase/firebase';
import CustomButton from '../../components/custom-button/custom-button';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = e => {
    e.preventDefault();
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            value={this.state.email}
            required
            type='email'
            onChange={this.handleChange}
          />
          <label>Email</label>
          <FormInput
            name='password'
            value={this.state.password}
            required
            type='password'
            onChange={this.handleChange}
          />
          <label>Password</label>
          <CustomButton type='submit' value='Submit Form' />
          <CustomButton onClick={signInWithGoogle}>
            {' '}
            Sign in with Google{' '}
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
