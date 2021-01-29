import React from 'react';
import './hero.scss';
import 'bootstrap/dist/css/bootstrap.min.css';



const Hero = () => {
  return (
      <section class="jumbotron text-center">
    <div class="container">
    <h1>Hello, world!</h1>
    <p class="lead text-muted"></p>
    <p>
      <a href="#" class="btn btn-primary my-2">Main call to action</a>
      <a href="#" class="btn btn-secondary my-2">Secondary action</a>
    </p>
  </div>
  </section>

  );
};

export default Hero;

