import React, { Fragment } from 'react';
import './home.scss';
import Hero from '../../components/hero/hero';
import About from '../../components/about/about';

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <About />
    </Fragment>
  );
};

export default HomePage;
