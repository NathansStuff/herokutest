import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

const Animals = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    // Get all animals from api
    // Update animals in state as they

    axios
      .get('./api/v1/animals.json')
      .then(resp => {
        setAnimals(resp.data.data);
      })
      .catch(respo => console.log(respo), [animals.length]);
  });

  const list = animals.map( item => {
      return (<li key={item.attributes.name}>{item.attributes.name}</li>);
  })
  return (
      <Fragment>
        <div>This is the animals#index view</div>
        <ul>{list}</ul>
      </Fragment>
  )
};

export default Animals;
