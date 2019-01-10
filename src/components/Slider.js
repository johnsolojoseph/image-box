import './css/Slider.css';
import React from 'react';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {slideVal: 0};
  }

  render() {
    return(
      <div className="slider">
        <h6>{this.props.name}</h6>
        <form action="#">
          <p className="range-field">
            <input
            className="slider-range"
            type="range"
            value={this.state.slideVal}
            min="0"
            max="100"
            onChange={(e) => this.setState({slideVal : e.target.value})}
            />
          </p>
        </form>

      </div>
    );
  }
}

export default Slider;
