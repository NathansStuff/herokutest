import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayCard from '../../components/display-card/displayCard';
import DailyUpdateForm from '../../components/daily-update-form/daily-update-form';
import './animal.scss';

const Animal = props => {
  const [animal, setAnimal] = useState({});
  const [daily_updates, setDailyUpdate] = useState({});

  // takes input to update the dailyupdate form
  const handleChange = e => {
    e.preventDefault();
    setDailyUpdate(
      Object.assign({}, daily_updates, { [e.target.name]: e.target.value })
    );
  };

  const handleSubmit = e => {
    e.preventDefault();

    const animal_id = props.match.params.id;

    axios
      .post('/api/v1/daily_updates', { daily_updates, animal_id })
      .then(resp => {
        debugger;
      })
      .catch(data => console.log('Error', data));
  };

  // Get a specific animal from the api based on the id passed in via props
  useEffect(() => {
    const id = props.match.params.id;
    const url = `/api/v1/animals/${id}`;

    axios
      .get(url)
      .then(resp => {
        console.log(resp.data.data.relationships.daily_updates)
        console.log('****')
        setAnimal(resp.data.data.attributes)
        setDailyUpdate(resp.data.data.relationships.daily_updates)
      })
      .catch(data => {
        console.log('error', data);
        // console.log(resp.data.data.attributes);
      });
  });

  let included;

  return (
    <div>
      <div className='show-top'>
        <DisplayCard attributes={animal} />

        <DailyUpdateForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          attributes={animal}
          daily_updates={daily_updates}
        />
      </div>
      <div className='show-bot'>[history will go here]</div>
    </div>
  );
};

export default Animal;
