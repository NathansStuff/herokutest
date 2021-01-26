import React, { Component } from 'react';
import axios from 'axios';
import DisplayCard from './displayCard';
import './animal.scss';

class Animal extends Component {
  state = {
    animal: null,
    dailyUpdate: null,
    dailyUpdates: [],
  };

  componentDidMount() {
    // Get a specific animal from the api based on the id passed in via props
    // Saves the data to the setAnimal object
    const id = this.props.match.params.id;
    const url = `/api/v1/animals/${id}`;

    axios
      .get(url)
      .then(resp => {
        this.setState({
          animal: resp.data.data.attributes,
          dailyUpdates: resp.data.included,
        })
          // console.log(resp.data.data.attributes);
      })
      .catch(data => {
        // console.log('error', data);
      });
  }

  render() {
    const name = this.state.animal ? this.state.animal.name : 'none';
    const image_url =
      'https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg';
    // const image_url = this.state.animal ? this.state.animal.image_url : null

    return (
      <div>
        <div className='show-top'>
          <DisplayCard attributes={this.state.animal} />

          <div className='show-form'>[form will go here]</div>
        </div>
        <div className='show-bot'>[history will go here]</div>
      </div>
    );
  }
}

export default Animal;

// <div className='show-details'>
//             <img src={image_url} alt={name} width='50' />
//             <h1>{name}</h1>
//           </div>
