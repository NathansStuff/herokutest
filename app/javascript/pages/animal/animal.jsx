// ISSUE: CHECKBOX IN DAILY-UPDATE-FORM DOESNT CORRESPOND TO TRUE/FALSE VALUES

import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import DisplayCard from '../../components/display-card/displayCard';
import DailyUpdateForm from '../../components/daily-update-form/daily-update-form';
import './animal.scss';
import DailyHistory from '../../components/daily-history/daily-history';
import { useHistory } from 'react-router-dom';
import EditAnimalForm from '../../components/edit-animal-form/edit-animal-form';

const Animal = props => {
  const [animal, setAnimal] = useState({});
  const [id, setId] = useState({});
  const [daily_updates, setDailyUpdates] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [daily_update, setDailyUpdate] = useState({
    weight: '',
    ate_food: '',
    drank_water: '',
    notes: '',
  });

  // edit animal form data
  // ------------------------------------------------------
  const [openEditAnimal, setEditAnimal] = useState(false);
  const [editAnimalForm, setEditAnimalForm] = useState({
    name: '',
    age: '',
    breed: '',
    microchip: '',
    microchip_number: '',
  });

  const handleEditAnimalOpen = () => {
    setEditAnimal(true);
    console.log('**')
    console.log(editAnimalForm);
  };

  // takes input to update the newAnimal form
  const handleEditAnimalFormChange = e => {
    e.preventDefault();
    setEditAnimalForm(
      Object.assign({}, editAnimalForm, { [e.target.name]: e.target.value })
    );
  };

  // posts data to api backend
  const handleEditAnimalFormSubmit = e => {
    e.preventDefault();
    editAnimalForm.microchip_number === ''
      ? setEditAnimalForm({ microchip: false })
      : setEditAnimalForm({ microchip: true });

    axios
      .post('/api/v1/animals', { ...editAnimalForm })
      .then(resp => {})
      .catch(data => console.log('Error', data));
  };

  const handleEditAnimalClose = e => {
    e.preventDefault();
    setEditAnimal(false);
  };

  // ------------------------------------------------------

  let history = useHistory();

  // posts destroy to animal controller
  const handleAnimalDestroy = (id, e) => {
    e.preventDefault();

    axios
      .delete(`/api/v1/animals/${id}`)
      .then(data => {
        history.push('/animals');
      })
      .catch(data => console.log('Error', data));
  };

  // takes input to update the dailyupdate form
  const handleChange = e => {
    e.preventDefault();

    if (e.type === 'checkbox') {
      console.log('checkbox');
    }

    setDailyUpdate(
      Object.assign({}, daily_update, { [e.target.name]: e.target.value })
    );
  };

  // posts create to daily updates
  const handleSubmit = e => {
    e.preventDefault();

    const animal_id = props.match.params.id;

    axios
      .post('/api/v1/daily_updates', { ...daily_update, animal_id })
      .then(resp => {
        setDailyUpdates([...daily_updates, resp.data.data]);
        setDailyUpdate({
          weight: '',
          ate_food: false,
          drank_water: false,
          notes: '',
        });
      })
      .catch(data => console.log('Error', data));
  };

  // daily update destroyer
  const handleDestroy = (id, e) => {
    e.preventDefault();
    console.log(id);
    axios
      .delete(`/api/v1/daily_updates/${id}`)
      .then(data => {
        const included = [...daily_updates];
        const index = included.findIndex(data => data.id == id);
        included.splice(index, 1);

        setDailyUpdates(included);
      })
      .catch(data => console.log('Error', data));
  };

  // Get a specific animal from the api based on the id passed in via props
  useEffect(() => {
    const id = props.match.params.id;
    const url = `/api/v1/animals/${id}`;
    setId(id);

    axios
      .get(url)
      .then(resp => {
        setAnimal(resp.data.data.attributes);
        setDailyUpdates(resp.data.included);
        setLoaded(true);
      })
      .catch(data => {
        console.log('error', data);
      });
  }, []);

  return (
    <div>
      {loaded && (
        <Fragment>
          <EditAnimalForm
            open={openEditAnimal}
            handleClose={handleEditAnimalClose}
            handleChange={handleEditAnimalFormChange}
            handleSubmit={handleEditAnimalFormSubmit}
            animal={animal}
          />
          <div className='show-top'>
            <DisplayCard
              attributes={animal}
              handleDestroy={handleAnimalDestroy}
              id={id}
              edit={handleEditAnimalOpen}
            />

            <DailyUpdateForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              attributes={animal}
              daily_update={daily_update}
            />
          </div>
          <div className='show-bot'>
            <DailyHistory
              attributes={daily_updates}
              handleDestroy={handleDestroy}
            />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Animal;
