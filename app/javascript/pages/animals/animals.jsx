import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import AnimalCard from '../../components/animal-card/animal-card';

const Animals = () => {
  const [animals, setAnimals] = useState([]);

  // Get all animals from api
  // Update animals in state as they return
  useEffect(() => {
    axios
      .get('./api/v1/animals.json')
      .then(resp => {
        setAnimals(resp.data.data);
      })
      .catch(resp => console.log(resp), [animals.length]);
  }, []);

  const list = animals.map(animal => {
    return <AnimalCard key={animal.attributes.name} attributes={animal} />;
  });
  return (
    <Fragment>
      <ul>{list}</ul>
    </Fragment>
  );
};

export default Animals;
