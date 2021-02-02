import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import AnimalCard from '../../components/animal-card/animal-card'

const Animals = () => {
  const [animals, setAnimals] = useState([]);

  // Get all animals from api
  // Update animals in state as they return
  useEffect(() => {
    axios
      .get('./api/v1/animals.json')
      .then(resp => {
        setAnimals(resp.data.data)
      })
      .catch(resp => console.log(resp), [animals.length]);
  }, []);

  const list = animals.map( animal => {
      return (
        <AnimalCard
          key={animal.attributes.name}
          attributes={animal}
        />
        );
  })
  return (
      <Fragment>
        <div classNameName="container-fluid row Profile">
          <div classNameName="col-md-4 ">
            <div classNameName="profile-img">
              <img src="" alt=""/>
              <p classNameName="display4">Example Name</p>
            </div>
            <div classNameName="row">
              <div classNameName="col-md-4">
                <div classNameName="profile-info">
                  <p>test</p>
                  <br/>
                  <p>test</p>
                  <br/>
                  <p>test</p>
                  <br/>
                  <p>test</p>
                  <br/>
                  <p>test</p>
                  <br/>
                  <p>test</p>
                </div>
              </div>
            </div>

          </div>
          <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>User Id</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Test123</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Test Test</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>test@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>123 456 7890</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Web Developer and Designer</p>
                                            </div>
                                        </div>
                            </div>
                          
                        </div>
                    </div>
        
          <ul>{list}</ul>
        </div>
        
      </Fragment>
  )
};

export default Animals;
