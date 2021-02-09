import React, { Fragment, Component } from 'react';
import Hero from '../../components/hero/hero';
import About from '../../components/about/about';
import Contact from '../../components/contact/contact';
import Footer from '../../components/footer/footer';

import axios from 'axios';

const HomePage = () => (
  <Fragment>
    <Hero />
    <About />
    <Contact />
  </Fragment>
);

export default HomePage;
