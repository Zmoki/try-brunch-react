import React from 'react';
import ImageUpload from './ImageUpload.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div id="content">
        <h5>Time to <a href="https://facebook.github.io/react/">React</a>.</h5>
        <ImageUpload/>
      </div>
    );
  }
}
