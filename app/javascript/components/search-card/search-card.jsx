import React from 'react';
import './search-card.scss';
import { useHistory } from 'react-router-dom';

const SearchCard = props => {
  let history = useHistory();

  const link = `/animal/${props.id}`;

  const onClick = () => {
    history.push(link);
  };

  return (
    <div className='search-card' onClick={onClick}>
      <p>{props.animal.attributes.name}</p>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg'
        alt='animal image'
      />
    </div>
  );
};

export default SearchCard;
