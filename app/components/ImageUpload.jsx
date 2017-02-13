import React from 'react';
import uploadcare from 'uploadcare-widget';

class ImageUpload extends React.Component {

  componentDidMount() {
    uploadcare.start({
      publicKey: "demopublickey",
      tabs: "all",
    });
  }

  render() {
    return (
      <div>
        <input type="hidden" role="uploadcare-uploader"/>
      </div>
    )
  }
}

export default ImageUpload;
