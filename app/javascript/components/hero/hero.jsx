import React from 'react';
import './hero.scss';
import 'bootstrap/dist/css/bootstrap.min.css';



const Hero = () => {
  return (
    <header className="masthead">
    <div className="container-fluid h-100">
      <div className="row h-100 align-items-center">
        <div className="col-12 text-center">
          <h1 className="font-weight-light">Vertically Centered Masthead Content</h1>
          <p className="lead">A great starter layout for a landing page</p>
        </div>
        <div className="col-sm-3">
            <a href="#" className="btn btn-lg">button</a>
        </div>
      </div>
    </div>
  </header>

  );
};

export default Hero;

