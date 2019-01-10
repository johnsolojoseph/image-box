import './css/PictureZone.css';
import React from 'react';
import Canvas from './Canvas';
import DropZone from 'react-dropzone';

//<!--<a className="upload-btn btn" onClick="onFileUpload"><i class="fas fa-file-upload"></i>  Upload</a> --


class PictureZone extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div className="picture-zone">
        <div className="canvas center">
          <canvas ref="canvas" width={640} height={425} />

        </div>
        <div className="upload container">

          <input type="file" id="imgUpload" accept="image/*" onChange="handleFiles(this.files)" />
        </div>

      </div>

    );
  }
}

export default PictureZone;
