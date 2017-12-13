import React, { Component } from 'react';
import { Button, Card, Row, Col } from 'react-materialize'

import { test } from '../api/collections.js';

export default class Uploader extends Component {
  
  handleImageChange(e) 
  { 
    console.log(e.target.files[0]);
    let name = e.target.files[0].name;
    console.log(e.target.files[0].size);
    console.log(e.target.files[0].type);
    console.log(e.target.files[0].lastModifiedDate);
    test.insert({name, createdAt: new Date(),});
  }
  
  render()
  { 
    return(
      <Row>
        <Col s={12} m={12} l={12} id="uploaderComp" className="uploaderClass">
          <label>Uploader goes here.</label>
          <input type="file" 
                 id="fileHolder" 
                 value="" 
                 accept="image/*" 
                 onChange={(event) => this.handleImageChange(event)} />
        </Col>
      </Row>
    );
  }
}