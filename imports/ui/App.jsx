import React, { Component } from 'react';
import { Button, Card, Row, Col } from 'react-materialize';

import Uploader from './Uploader.jsx';
import Gallery from './Gallery.jsx';

export default class App extends Component {
  render(){
    return(
      <div>
        <Row>      
            <h1>Welcome to WallpaperChan</h1>        
        </Row>      
        <Uploader />
        <Gallery />
    </div>
    );
  }
}