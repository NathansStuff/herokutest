import React from 'react';
import './edit-animal-form.scss';
import Dialog from '@material-ui/core/Dialog';

const EditAnimalForm = props => {
  if (!props.open) {
    return <div></div>;
  }
  return (
    <Dialog open={props.open}>
      <div className='new-animal-wrapper'>
        <div className='new-animal-form'>
          <div className='new-animal-title'>
            <div></div>
            <h3>Edit Animal</h3>
            <button onClick={props.handleClose}>X</button>
          </div>
          <form onSubmit={props.handleSubmit}>
            <div className='new-animal-field'>
              <label>Name</label>
              <input
                name='name'
                placeholder={props.animal.name}
                onChange={props.handleChange}
              ></input>
            </div>
            <div className='new-animal-field'>
              <label>Age</label>

              <input
                name='age'
                type='number'
                placeholder={props.animal.age}
                onChange={props.handleChange}
              ></input>
            </div>
            <div className='new-animal-field'>
              <label>Breed</label>

              <input
                name='breed'
                placeholder={props.animal.breed}
                onChange={props.handleChange}
              ></input>
            </div>
            <div className='new-animal-field'>
              <label>Microchip</label>

              <input
                name='microchip'
                type='checkbox'
                placeholder={props.animal.microchip}
                onChange={props.handleChange}
              ></input>
            </div>
            <div className='new-animal-field'>
              <label>MicrochipNumber</label>

              <input
                name='microchip_number'
                type='number'
                placeholder={props.animal.microchip_number}
                onChange={props.handleChange}
              ></input>
            </div>
            <div className='new-animal-field'>
              <label>Notes</label>

              <textarea
                name='notes'
                rows='10'
                cols='50'
                placeholder={props.animal.notes}
                onChange={props.handleChange}
              ></textarea>
            </div>
            <div>
              <button type='submit'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </Dialog>
  );
};

export default EditAnimalForm;
