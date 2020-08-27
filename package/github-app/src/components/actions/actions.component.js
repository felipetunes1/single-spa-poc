'use strict'

import React from 'react'

import { ListGroup, Col, Row } from "react-bootstrap";

const Actions = ({ handleRepos, handleStarred }) => (
   <Row>
      <Col>
         <ListGroup className='actions'>
            <ListGroup.Item action onClick={handleRepos} variant="primary">Ver Repositorios</ListGroup.Item>
         </ListGroup>
      </Col>
      <Col>
         <ListGroup className='actions'>
            <ListGroup.Item action onClick={handleStarred} variant="primary">Ver Favoritos</ListGroup.Item>
         </ListGroup>
      </Col>
   </Row>
)

export default Actions;