import React from 'react';
import './navbar.scss';

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <div className='navbar-logo'>
          <img
            src='https://seeklogo.com/images/B/business-people-circle-logo-83C8022853-seeklogo.com.png'
            alt='logo'
          />
        </div>
        <div className='navbar-brandname'>
          <h1>Cybele Project</h1>
        </div>
      </div>
      <div className='navbar-right'>
        <div className='pages'>
          <h3>Home</h3>
          <h3>About</h3>
          <h3>Contact</h3>
        </div>
        <div className='login'>
          <h3>Login</h3>
          <h3>Signup</h3>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
