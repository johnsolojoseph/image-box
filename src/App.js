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
        <Grid
        container
        alignItems="center"
        >
          <Grid item lg={6} xs={12}>
          <Grid
          container
          direction="column"
          alignItems="center"
          >
            <Button />
          </Grid>
          </Grid>

          <Grid item lg={6} xs={12}>
          <Grid
          container
          direction="column"
          alignItems="center"
          >
            <Slider />
          </Grid>
          </Grid>
      </Grid>


      </div>
    );
  }

}

export default App;
