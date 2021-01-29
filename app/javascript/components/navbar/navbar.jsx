import React from 'react';
import { MDBNavbar, MDBNavbarBrand } from "mdbreact";
import './navbar.scss';
import logo from 'logo.svg'
import { BrowserRouter as Router, Link } from 'react-router-dom';

  

const NavBar = () => {
  return (
 
      <React.Fragment>
      <MDBNavbar color="unique-color-dark" style={{ marginTop: "20px" }} dark>
        <MDBNavbarBrand href="#">
          <img src={logo} height="30" alt="" />
        </MDBNavbarBrand>
      </MDBNavbar>
      </React.Fragment>
    );
};

export default NavBar;


