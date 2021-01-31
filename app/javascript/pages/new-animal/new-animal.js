import React from 'react';
import './new-animal.scss';

const NewAnimal = () => {
  return (
    <div className='new-animal-wrapper'>
      <div className='new-animal-form'>
        <div className='new-animal-title'>
          <h3>New Animal</h3>
        </div>
        <form>
          <div className='new-animal-field'>
            <input name='name' placeholder='Name'></input>
          </div>
          <div className='new-animal-field'>
            <input name='age' type='number' placeholder='Age'></input>
          </div>
          <div className='new-animal-field'>
            <input name='breed' placeholder='Breed'></input>
          </div>
          <div className='new-animal-field'>
            <input
              name='microchip_number'
              type='number'
              placeholder='Microchip Number'
            ></input>
          </div>
          <div className='new-animal-field'>
            <textarea
              name='notes'
              rows='10'
              cols='50'
              placeholder='Notes: 
            
            eg. Medication, Desexed date'
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

export default NewAnimal;
