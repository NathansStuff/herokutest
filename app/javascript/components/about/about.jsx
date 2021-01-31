import React from 'react';
import './about.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import background from 'images/index-background.jpg';


const styles = {
  imageContainer: {
      height: '100vh',
      width: '100vw',
      backgroundSize: 'cover',
      backgroundPositionY: '70%',
      overflow: 'hidden',
      backgroundRepeat:'no-repeat',
      backgroundImage: `url(${background})`

  }
};

const About = () => {
  return (
  <div className="bg-black py-5">
    <div className="container py-5">
      <div className="row align-items-center mb-5">
        <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
          <h2 className="font-weight-light">What is The Cybele Project?</h2>
          <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Conact Us</a>
        </div>
        <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834139/img-1_e25nvh.jpg" alt="" className="img-fluid mb-4 mb-lg-0"/></div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-5 px-5 mx-auto"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/img-2_vdgqgn.jpg" alt="" className="img-fluid mb-4 mb-lg-0"/></div>
        <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
          <h2 className="font-weight-light">Adoptions</h2>
          <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
        </div>
      </div>
    </div>
  </div>
   
  )
};




export default About;
