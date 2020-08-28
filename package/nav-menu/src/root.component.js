import React from 'react';

import { Navbar, Nav, Form, Button, NavDropdown } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.css'

class Menu extends React.Component {

  componentDidMount() {

    if (!this.props.props.menu.length)
      window.history.pushState(null, null, '/login')
  }

  render() {
    return (
      <Navbar bg="light" variant="light">
        <Nav className="mr-auto">
          {(
            this.props.props.menu.sort((a, b) => a.order - b.order).map(({ path, name }) => (
              <Nav.Link onClick={() => window.history.pushState(null, null, path)}>{name}</Nav.Link>
            ))
          )}
        </Nav>
        <Nav className="text-right">
          <NavDropdown title={this.props.props.getToken() ? JSON.parse(this.props.props.getToken()).username : ''} id="collasible-nav-dropdown">
            <NavDropdown.Item action onClick={() => this.props.props.logout()}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        {/* <Form inline>
          <Button type="submit" variant="light" >Logout</Button>
        </Form> */}
      </Navbar>
    )
  }

}

export default function Root(props) {
  if(props.validaToken()) {
    return (
      <Menu props={props} />
    );
  } else {
    return false;
  }
  
}

