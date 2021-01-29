import React from 'react';
import './hero.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from 'images/index-background.jpg'

const styles = {
    imageContainer: {
        height: '100vh',
        width: '100vw',
        backgroundSize: 'cover',
        backgroundPositionY: '70%',
        overflow: 'hidden',
        backgroundRepeat:'no-repeat',
        backgroundImage: `url(${background})`

    }
};


const Hero = () => {
  return (
    <div className='container-fluid' style={styles.imageContainer}>
      
      <div className="p-5 text-center mt-auto h-75 w-75 ">
          <div className="d-flex justify-content-center align-items-center h-100 ">
            <div className="text-white px-5">
              <h4 className="mb-3">Welcome!</h4>
              <p className='lead'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus laudantium in eaque cumque. Maiores laboriosam, esse quos hic inventore qui.</p>
              <a className="btn btn-outline-light btn-lg px-3" href="#!" role="button">Signup</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

