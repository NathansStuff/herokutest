import React, { Fragment, Component } from 'react';
import './home.scss';
import Hero from '../../components/hero/hero';
import About from '../../components/about/about';

export default class HomePage extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
    <div>
      <Fragment>
        <Hero />
        <About />
      </Fragment>
    </div>
    );
  };

}
