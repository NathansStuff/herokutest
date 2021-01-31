import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import AnimalCard from '../../components/animal-card/animal-card'

const Animals = () => {
  const [animals, setAnimals] = useState([]);

  // Get all animals from api
  // Update animals in state as they return
  useEffect(() => {
    axios
      .get('./api/v1/animals.json')
      .then(resp => {
        setAnimals(resp.data.data)
      })
      .catch(resp => console.log(resp), [animals.length]);
  }, []);

  const list = animals.map( animal => {
      return (
        <AnimalCard
          key={animal.attributes.name}
          attributes={animal}
        />
        );
  })
  return (
      <Fragment>
        <div>This is the animals#index view</div>
        <ul>{list}</ul>
      </Fragment>
  )
};

export default Animals;
