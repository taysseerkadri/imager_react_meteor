import React, { Component } from 'react';
import { Button, Card, Row, Col } from 'react-materialize';

import Header from './Header.jsx';
import Uploader from './Uploader.jsx';
import Gallery from './Gallery.jsx';

export default class App extends Component {
  render(){
    return(
      <div>
        <Header />
        <Uploader />
        <Gallery />
    </div>
    );
  }
}