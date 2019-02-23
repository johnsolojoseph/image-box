import './css/PictureZone.css';
import React from 'react';

class PictureZone extends React.Component {

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
