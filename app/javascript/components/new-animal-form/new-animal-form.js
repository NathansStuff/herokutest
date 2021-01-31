import React from 'react';
import './new-animal-form.scss';

const NewAnimalForm = props => {
  return (
    <div className='new-animal-wrapper'>
      <div className='new-animal-form'>
        <div className='new-animal-title'>
          <h3>New Animal</h3>
        </div>
        <form onSubmit={props.handleSubmit}>
          <div className='new-animal-field'>
            <input
              name='name'
              placeholder='Name'
              onChange={props.handleChange}
            ></input>
          </div>
          <div className='new-animal-field'>
            <input
              name='age'
              type='number'
              placeholder='Age'
              onChange={props.handleChange}
            ></input>
          </div>
          <div className='new-animal-field'>
            <input
              name='breed'
              placeholder='Breed'
              onChange={props.handleChange}
            ></input>
          </div>
          <div className='new-animal-field'>
            <input
              name='microchip_number'
              type='number'
              placeholder='Microchip Number'
              onChange={props.handleChange}
            ></input>
          </div>
          <div className='new-animal-field'>
            <textarea
              name='notes'
              rows='10'
              cols='50'
              placeholder='Notes: 
            
            eg. Medication, Desexed date'
              onChange={props.handleChange}
            ></textarea>
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewAnimalForm;