import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Navbar, NavItem, Icon, Row} from 'react-materialize';

export default class Header extends Component {
  render(){
    return(
      <Row>
      <header>
        <Navbar brand='Wallpaper Website' right>
          <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
          <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
          <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
          <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
        </Navbar>
      </header>
      </Row>
      /**<!--<Row>
          <Navbar brand='logo' right>
            <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
            <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
            <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
            <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
          </Navbar>
      </Row>     
      **/
    );
  }
}