import './css/App.css';
import img from './img/sd.jpg'
import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: img,
      brightness: 100,
      saturate: 100,
      contrast: 100,
      sepia: 0,
      grayscale: 0,
      hue: 0,
      invert: 0
    };
  }




  handleFiles(e) {
    return (
      this.setState({
        filePath: URL.createObjectURL(e.target.files[0])
      }),
      console.log(this.state.filePath)
    );
  }

  resetValues = (e) => {
    this.setState({
      brightness: 100,
      saturate: 100,
      contrast: 100,
      sepia: 0,
      grayscale: 0,
      hue: 0,
      invert: 0
    });
  }


  render() {
    return (
      <div className="app">
        <NavBar title="ImageBox" />
        <div className="row">
          <div className="picture-zone-container col s12 m12 l8">
          <div className="picture-zone">


          <div className="upload container">
            <label htmlFor="imgUpload"><i className="fas fa-file-upload"></i> Upload</label>
            <input type="file" id="imgUpload" accept="image/*" onChange={this.handleFiles.bind(this)} />


          </div>


          <div className="canvas center container">
            <img className="responsive-img" alt="Uploaded User Files" src={this.state.filePath} style={{filter: `brightness(${this.state.brightness}%) contrast(${this.state.contrast}%) saturate(${this.state.saturate}%) sepia(${this.state.sepia}%) grayscale(${this.state.grayscale}%) invert(${this.state.invert}%) hue-rotate(${this.state.hue}deg) `}}/>
          </div>





          </div>


          </div>
          <div className="edit-menu-container col s12 m12 l4">
          <div className="container">

            <div className="slide-view">

              <h6>Brightness</h6>
              <form action="#">
                <p className="range-field">
                  <input
                  className="slider-range"
                  value={this.state.brightness}
                  type="range"
                  min="0"
                  max="200"
                  onChange={(e) => this.setState({brightness : e.target.value})}
                  />
                </p>
              </form>

              <h6>Saturation</h6>
              <form action="#">
                <p className="range-field">
                  <input
                  className="slider-range"
                  value={this.state.saturate}
                  type="range"
                  min="0"
                  max="200"
                  onChange={(e) => this.setState({saturate : e.target.value})}
                  />
                </p>
              </form>

              <h6>Contrast</h6>
              <form action="#">
                <p className="range-field">
                  <input
                  className="slider-range"
                  value={this.state.contrast}
                  type="range"
                  min="0"
                  max="200"
                  onChange={(e) => this.setState({contrast : e.target.value})}
                  />
                </p>
              </form>

              <h6>Sepia</h6>
              <form action="#">
                <p className="range-field">
                  <input
                  className="slider-range"
                  value={this.state.sepia}
                  type="range"
                  min="0"
                  max="200"
                  onChange={(e) => this.setState({sepia : e.target.value})}
                  />
                </p>
              </form>

              <h6>Grayscale</h6>
              <form action="#">
                <p className="range-field">
                  <input
                  className="slider-range"
                  value={this.state.grayscale}
                  type="range"
                  min="0"
                  max="100"
                  onChange={(e) => this.setState({grayscale : e.target.value})}
                  />
                </p>
              </form>

              <h6>Hue</h6>
              <form action="#">
                <p className="range-field">
                  <input
                  className="slider-range"
                  value={this.state.hue}
                  type="range"
                  min="0"
                  max="360"
                  onChange={(e) => this.setState({hue : e.target.value})}
                  />
                </p>
              </form>

              <h6>Invert</h6>
              <form action="#">
                <p className="range-field">
                  <input
                  className="slider-range"
                  value={this.state.invert}
                  type="range"
                  min="0"
                  max="100"
                  onChange={(e) => this.setState({invert: e.target.value})}
                  />
                </p>
              </form>
              <br /> < br />

              <div className="reset-area">
                <div className="reset center container" onClick={this.resetValues}>
                  <h6>Reset </h6>
                </div>
              </div>


            </div>


          </div>
          </div>
        </div>
        <div className="container css-code">
          <div className="center">
            <h3 className="css-text"> CSS Code </h3>
          </div>
          <div className="code-box">

            <h6> .filter {"{"}
            <br />
            filter: brightness({this.state.brightness}%) contrast({this.state.contrast}%) saturate({this.state.saturate}%) sepia({this.state.sepia}%) grayscale({this.state.grayscale}%) invert({this.state.invert}%) hue-rotate({this.state.hue}deg){";"}
            <br />
            {"}"}
            </h6>
          </div>
        </div>
        <Footer />
      </div>


    );
  }

}

export default App;
