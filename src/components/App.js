import './css/App.css';
import React from 'react';
import NavBar from './NavBar';
import PictureZone from './PictureZone';
import EditMenu from './EditMenu';
import Footer from './Footer'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brightness: 100,
      saturate: 100,
      contrast: 100,
      sepia: 0,
      grayscale: 0,
      hue: 0,
      invert: 0
    };
  }
  render() {
    return (
      <div className="app">
        <NavBar title="ImageBox" />
        <div className="row">
          <div className="picture-zone-container col s12 m12 l8">
          <PictureZone />
          </div>
          <div className="edit-menu-container col s12 m12 l4">
          <EditMenu />
          </div>
        </div>
        <Footer />
      </div>


    );
  }

}

export default App;
