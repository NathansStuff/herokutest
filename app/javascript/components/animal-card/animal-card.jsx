import React from 'react';

const AnimalCard = (props) => {
  return (
    <div className='card'>
      <div className='animal-name'>{props.attributes.name}</div>
      <div className='animal-age'>{props.attributes.age}</div>
      <div className='animal-photo'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg' alt={props.attributes.name}/>
      </div>
      <div className='animal-link'><a href=''>View Me!</a></div>
    </div>
  );
};

export default AnimalCard;
