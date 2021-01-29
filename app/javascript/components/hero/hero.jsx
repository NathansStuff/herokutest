import React from 'react';
import './hero.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from 'images/index-background.jpg'

const styles = {
    imageContainer: {
        height: '100vh',
        width: '100vw',
        backgroundSize: 'cover',
        backgroundPositionY: '60%',
        overflow: 'hidden',
        backgroundRepeat:'no-repeat',
        backgroundImage: `url(${background})`

    }
};


const Hero = () => {
  return (
    <div className='container-fluid' style={styles.imageContainer}>
      
      <div className="p-5 text-center">
          <div className="d-flex justify-content-center align-items-center h-100 ">
            <div className="text-white">
              <h1 className="mb-3">Heading</h1>
              <h4 className="mb-3">Subheading</h4>
              <a className="btn btn-outline-light btn-lg" href="#!" role="button">Call to action</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

