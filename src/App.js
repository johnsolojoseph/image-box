import React, { Component } from 'react';
import logo from './logo.svg';

import AppBar from '@material-ui/core/AppBar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


import './App.css';



class App extends Component {
  render() {
    return (
      <div>
      <AppBar position="static">
        <Typography> Image Box
        </Typography>
      </AppBar>
      </div>



    );
  }
}

export default App;
