import './custom-button.scss';
import React from 'react';

const customButton = ({ children, ...otherProps }) => {
  <button className='custom-button' {...otherProps}>
    {children}
  </button>;
};

export default customButton