import './css/EditMenu.css';
import React from 'react';
import Slider from './Slider';

class EditMenu extends React.Component {
  render() {
    return(
      <div className="container">

        <div className="slide-view">
          <Slider name="Brightness" />
          <Slider name="Saturation" />
          <Slider name="Contrast" />
          <Slider name="Sepia" />
          <Slider name="Grayscale" />
          <Slider name="Hue" />
          <Slider name="Invert" />
        </div>


      </div>

    );
  }
}

export default EditMenu;
