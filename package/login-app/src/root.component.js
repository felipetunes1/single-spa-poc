import React from 'react';

import { Form, Card, Button, Container } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.css'

function authError(message) {
  alert(message)
}

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      user: undefined,
      pass: undefined
    }
  }

  componentDidMount() {
    console.log(this.props.props.getToken())
    if(this.props.props.getToken())
      window.history.pushState(null, null, '/')
  }

  render() {
    return <Container>
      <Card>
        <Card.Header>
          Login
        </Card.Header>
        <Card.Body>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="User" onChange={(e) => this.setState({ user: e.target.value })} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" onChange={(e) => this.setState({ pass: e.target.value })} />
          </Form.Group>
          <Button onClick={() => this.props.props.auth(this.state.user, this.state.pass, this.props.props.functToken, authError)}>Login</Button>
        </Card.Body>
        <Card.Footer className="text-right">
          v0.0.1
        </Card.Footer>
      </Card>
    </Container>

  }
}

export default function Root(props) {
  return <Login props={props} />;
}

