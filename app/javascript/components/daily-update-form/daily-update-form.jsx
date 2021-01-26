import React from 'react';
import './daily-update-form.scss';

const DailyUpdateForm = props => {
  return (
    <div className='daily-wrapper'>
      <div>
        <h3>New Update</h3>
      </div>
      <form>
        <div className='daily-field'>
          <input type='number' name='weight' placeholder='Weight'></input>
        </div>
        <div className='daily-field'>
          <input type='checkbox' name='ate-food'></input>
          <label>Ate Food</label>
        </div>
        <div className='daily-field'>
          <input type='checkbox' name='drank-water'></input>
          <label>Drank Water</label>
        </div>
        <div className='daily-field'>
          <label>Upload Photo</label>
          <input type='file' name='photo'></input>
        </div>
        <div className='daily-field'>
          <label>Notes</label>
          <textarea name='notes' rows='10' cols='50'></textarea>
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default DailyUpdateForm;
