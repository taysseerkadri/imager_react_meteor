import React, { Component } from 'react';
import { Button, Card, Row, Col } from 'react-materialize';

export default class Uploader extends Component {
  render(){
    return(
      <Row>
        <Col s={12} m={12} l={12} className='uploaderClass'>
          <label>Uploader goes here.</label>
          <input type="file" />
        </Col>
      </Row>
    );
  }
}