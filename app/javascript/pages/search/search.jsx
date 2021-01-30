import React from 'react';
import './search.scss';

const SearchPage = () => {
  return (
    <div className='search-wrapper'>
      <div class='left-panel'>
        <div className='left-panel-overview'>
          <img
            src='https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
            alt='profile-pic'
          />
          <h3>NAME</h3>
        </div>
        <div className='left-panel-writing'>
          <p>lorem ipsum</p>
        </div>
      </div>

      <div class='right-panel'>
        <div className='right-panel-header'>New</div>
        <div className='right-panel-body'>images</div>
      </div>
    </div>
  );
};

export default SearchPage;
