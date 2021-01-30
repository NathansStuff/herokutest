// ISSUE: CHECKBOX IN DAILY-UPDATE-FORM DOESNT CORRESPOND TO TRUE/FALSE VALUES

import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import DisplayCard from '../../components/display-card/displayCard';
import DailyUpdateForm from '../../components/daily-update-form/daily-update-form';
import './animal.scss';
import DailyHistory from '../../components/daily-history/daily-history';

const Animal = props => {
  const [animal, setAnimal] = useState({});
  const [daily_updates, setDailyUpdates] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [daily_update, setDailyUpdate] = useState({
    weight: '',
    ate_food: false,
    drank_water: false,
    notes: '',
  });

  // takes input to update the dailyupdate form
  const handleChange = e => {
    e.preventDefault();
    console.log(`name: `, e.target.name, 'value: ', e.target.value);
    setDailyUpdate(
      Object.assign({}, daily_update, { [e.target.name]: e.target.value })
    );
  };

  const handleSubmit = e => {
    e.preventDefault();

    const animal_id = props.match.params.id;

    axios
      // const csrfToken = document.querySelector('[name=csrf-token]').content
      // axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

      .post('/api/v1/daily_updates', { ...daily_update, animal_id })
      .then(resp => {
        setDailyUpdates([...daily_updates, resp.data.data]);
        setDailyUpdate({
          weight: '',
          ate_food: '',
          drank_water: '',
          notes: '',
        });
        debugger
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
        // console.log(resp.data.included);
        // console.log('****');
        setAnimal(resp.data.data.attributes);
        setDailyUpdates(resp.data.included);
        setLoaded(true);
      })
      .catch(data => {
        console.log('error', data);
      });
  }, []);

  let included;

  return (
    <div>
      {loaded && (
        <Fragment>
          <div className='show-top'>
            <DisplayCard attributes={animal} />

            <DailyUpdateForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              attributes={animal}
              daily_update={daily_update}
            />
          </div>
          <div className='show-bot'>
            <DailyHistory attributes={daily_updates} />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Animal;
