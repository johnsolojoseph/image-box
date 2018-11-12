import React, { Component } from 'react';
import logo from './logo.svg';
import {Grid, Paper, MuiThemeProvider, createMuiTheme, Typography, withStyles} from '@material-ui/core';
import PropTypes from 'prop-types';

import NavBar from './components/NavBar.js'
import Slider from './components/Slider.js'




import './App.css';



class App extends Component {
      render() {
      return (
      <div>
      <NavBar />
      <Grid container>
      <Grid item xs={6}>
      <Typography>Contrast</Typography>
      <Slider />
      <Typography>Brightness</Typography>
      <Slider />
      <Typography>Saturate</Typography>
      <Slider />
      <Typography>Sepia</Typography>
      <Slider />
      </Grid>
      </Grid>


      </div>
    );
  }

}

export default App;
