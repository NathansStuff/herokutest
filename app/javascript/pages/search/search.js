import React, { useState, useEffect, Fragment } from 'react';
import './search.scss';
import axios from 'axios';
import SearchCard from '../../components/search-card/search-card';
import NewAnimalForm from '../../components/new-animal-form/new-animal-form';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const SearchPage = () => {
  let history = useHistory();

  const [animals, setAnimals] = useState([]);
  const [searchField, setSearchField] = useState([]);
  const [open, setOpen] = useState(false);
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

  const filteredAnimals = animals.filter(animal =>
    animal.attributes.name
      .toLowerCase()
      .includes(searchField.length > 0 ? searchField.toLowerCase() : '')
  );

  const list = filteredAnimals.map(animal => {
    return <SearchCard animal={animal} id={animal.id} />;
  });

  // Code for the new animal form
  const [newAnimal, setNewAnimal] = useState({
    name: '',
    age: '',
    breed: '',
    microchip: false,
    microchip_number: '',
    notes: '',
    photo: null,
  });

  // takes input to update the newAnimal form
  const handleChange = e => {
    e.preventDefault();
    setNewAnimal(
      Object.assign({}, newAnimal, { [e.target.name]: e.target.value })
    );
    console.log(newAnimal);
  };

  // const handleFile = e => {
  //   e.preventDefault();
  //   setNewAnimal(
  //     Object.assign({}, newAnimal, { [e.target.name]: e.target.files[0] })
  //   );
  //   console.log(newAnimal)
  //   debugger
  // };

  // const [selectedFile, setSelectedFile] = useState(null)

  const handleFile = e => {
    e.preventDefault();
    const file = e.target.files[0];
    // setSelectedFile(file)
    // console.log(selectedFile)
    setNewAnimal({
      ...newAnimal,
      photo: file,
    });

    // setNewAnimal(
    //   Object.assign({}, newAnimal, { [e.target.name]: e.target.files[0] })
    // ) // doesnt work

    // setNewAnimal(() => ({name: 'help'}))

    // setNewAnimal({ name: 'fclk me' });

    // console.log(e.currentTarget.files[0]);
    console.log(newAnimal);
    // console.log(e.target.name)
    // debugger
  };

  // posts data to api backend
  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('animal[name]', newAnimal.name);
    formData.append('animal[age]', newAnimal.age);
    formData.append('animal[breed]', newAnimal.breed);
    formData.append('animal[microchip]', newAnimal.microchip);
    formData.append('animal[microchip_number]', newAnimal.microchip_number);
    formData.append('animal[notes]', newAnimal.notes);
    formData.append('animal[photo]', newAnimal.photo);

    // axios({
    //   method: 'post',
    //   url: '/api/v1/animals',
    //   data: formData,
    //   headers: {
    //     'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
    //   },
    // })
    $.ajax({
      url: '/api/v1/animals',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false,
    })

      // .post('/api/v1/animals', { ...formData })
      .then(resp => {
        history.push(`/animal/${resp.data.data.id}`);
      })
      .catch(data => console.log('Error', data));
  };

  const onChange = e => {
    setSearchField(e.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = e => {
    e.preventDefault();
    setOpen(false);
  };

  return (
    <div className='search-wrapper'>
      <div className='left-panel'>
        <div className='left-panel-overview'>
          <img
            src='https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
            alt='profile-pic'
          />
          <h3>USER NAME</h3>
        </div>
        <div className='left-panel-writing'>NAME</div>
      </div>

      <div className='right-panel'>
        <div className='right-panel-header'>
          <button
            variant='outlined'
            color='primary'
            onClick={handleClickOpen}
            id='Addnew'
          >
            Add New
          </button>

          <input
            type='search'
            placeholder='search animals'
            onChange={e => onChange(e)}
          ></input>
        </div>
        <NewAnimalForm
          open={open}
          handleClose={handleClose}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleFile={handleFile}
        />
        <div className='right-panel-body'>{list}</div>
      </div>
    </div>
  );
};

export default SearchPage;
