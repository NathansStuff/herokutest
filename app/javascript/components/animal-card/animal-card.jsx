import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './animal-card.scss';

const AnimalCard = props => {
  return (
    <div className='card'>
      <div className='card-topt'>
        <div className='animal-name'>{props.attributes.attributes.name}</div>
        <div className='animal-age'>Age: {props.attributes.attributes.age}</div>

        <div className='animal-link'>
          <Link to={`/animal/${props.attributes.id}`}>View Me!</Link>
        </div>
      </div>
      <div className='card-bottom'>
        <div className='animal-photo'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg'
            alt={props.attributes.attributes.name}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
