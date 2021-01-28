import React from 'react';
import './hero.scss';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';



const Hero = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Typography component="div" className="hero" style={ 'height: 100vh; width: 100%; background-color: black; background-repeat: no-repeat; background-attachment: fixed; background-size: cover; display: flex; justify-content: center; min-height: 600px;'} />
      </Container>
    </React.Fragment>
  );
};

export default Hero;
