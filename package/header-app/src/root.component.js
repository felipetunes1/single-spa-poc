import React from 'react'

import { Navbar, Image } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.css'

export default function Root(props) {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand action onClick={() => window.history.pushState(null, null, '/')}>
        <Image src='https://www.hdiseguros.com.br/assets/portal/img/logos/logo-min.svg' height={45} />
      </Navbar.Brand>
    </Navbar>
  );
}

