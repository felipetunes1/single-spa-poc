import React from 'react'

import { Navbar } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.css'

export default function Root(props) {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/">Home</Navbar.Brand>
    </Navbar>
  );
}

