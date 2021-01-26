import React from 'react';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from '../routing/App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/navbar/navbar';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Fragment>
      <NavBar />
      <Router>
        <Route path='/' component={App} />
      </Router>
    </Fragment>,
    document.body.appendChild(document.createElement('div'))
  );
});
