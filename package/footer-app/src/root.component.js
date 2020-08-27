import React from 'react';

import { Spinner, Col, Navbar } from "react-bootstrap";

export default function Root(props) {
  return (
    <Navbar bg="light" variant="light">
      <Col className='text-right'> v0.0.1 <Spinner animation="border" /></Col>
    </Navbar>
  );
}

