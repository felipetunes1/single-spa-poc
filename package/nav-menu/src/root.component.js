import React from 'react';

import { Navbar, Nav, Form, Button } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.css'

class Menu extends React.Component {
  constructor() {
    super()
  }

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
        <Form inline>
          <Button type="submit" variant="light" onClick={() => this.props.props.logout()}>Logout</Button>
        </Form>
      </Navbar>
    )
  }

}

export default function Root(props) {
  return (
    <Menu props={props} />
  );
}

