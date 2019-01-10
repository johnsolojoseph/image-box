import './css/PictureZone.css';
import React from 'react';
import Canvas from './Canvas';
import DropZone from 'react-dropzone';



class PictureZone extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div className="picture-zone">
        <div className="canvas center">
        <Canvas />
        </div>
        <div className="upload container">
          <a className="upload-btn btn" onClick="onFileUpload"><i class="fas fa-file-upload"></i>  Upload</a>
          
        </div>

      </div>

    );
  }
}

export default PictureZone;
