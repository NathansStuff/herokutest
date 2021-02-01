import React, { Component } from 'react';
import './contact-form.scss';
import * as emailjs from 'emailjs-com';
import {
  Button,
  FormFeedback,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    let templateParams = {
      from_name: email,
      to_name: 'n.odonnell@hotmail.com',
      subject: subject,
      message_html: { ...name, ...message },
    };
    emailjs.send(
      'hotmail',
      'template_XXXXXXXX',
      templateParams,
      'user_XXXXXXXXXXXXXXXXXXXX'
    );
    this.resetForm();
  }
  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    return (
      <div className='contact-wrapper'>
        <div className='contact-top'>
          <h3>Contact Us</h3>
          <h3>X</h3>
        </div>
        <div className='contact-form'>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className='contact-body'>
              <div className='contact-field'>
                <Input
                  type='text'
                  name='name'
                  value={this.state.name}
                  onChange={this.handleChange.bind(this, 'name')}
                  placeholder='Name'
                />
                <div className='contact-field'>
                  <Input
                    type='email'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleChange.bind(this, 'email')}
                    placeholder='Enter email'
                  />
                </div>
                <div className='contact-field'>
                  <Input
                    type='text'
                    name='subject'
                    value={this.state.subject}
                    onChange={this.handleChange.bind(this, 'subject')}
                    placeholder='Subject'
                  />
                </div>
                <div className='contact-field'>
                  <Input
                    type='textarea'
                    name='message'
                    className='text-primary'
                    value={this.state.message}
                    onChange={this.handleChange.bind(this, 'message')}
                  />
                </div>
              </div>
              <div className='contact-footer'>
                <div>
                  <p>Socials</p>
                </div>
                <div>
                  <Button variant='primary' type='submit'>
                    Send
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default ContactForm;
