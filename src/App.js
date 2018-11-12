import React, { Component } from 'react';
import logo from './logo.svg';
import {Grid, Paper, MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import {withStyles, Typography} from '@material-ui/core';
import classNames from 'classnames';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import PropTypes from 'prop-types';

import NavBar from './components/NavBar.js'
import Slider from './components/Slider.js'
import Button from './components/Button.js'




import './App.css';



class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Grid container>
          <Grid item lg={6} xs={12}>
            <Button />
          </Grid>

          <Grid item lg={6} xs={12}>
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
