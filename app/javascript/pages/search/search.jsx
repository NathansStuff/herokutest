import React, { useState, useEffect, Fragment } from 'react';
import './search.scss';
import axios from 'axios';
import SearchCard from '../../components/search-card/search-card';

const SearchPage = () => {
  const [animals, setAnimals] = useState([]);
  const [searchField, setSearchField] = useState([]);
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
    animal.attributes.name.toLowerCase().includes(searchField.length > 0 ? searchField.toLowerCase() : '')
  );

  const list = filteredAnimals.map(animal => {
    return <SearchCard animal={animal} />;
  });

  const onChange = e => {
    setSearchField(e.target.value);
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
          <p>NEW ANIMAL</p>
          <input
            type='search'
            placeholder='search animals'
            onChange={e => onChange(e)}
          ></input>
        </div>
        <div className='right-panel-body'>{list}</div>
      </div>
    </div>
  );
};

export default SearchPage;
