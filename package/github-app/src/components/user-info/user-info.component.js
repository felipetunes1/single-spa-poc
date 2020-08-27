'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import { Image, Jumbotron, Row, Col, ListGroup } from "react-bootstrap";

const UserInfo = ({ username, imgUrl, url, repos, followers, following }) => (
   <Jumbotron>
      <Row>
         <Col>
            <Image src={imgUrl} height={200} />
         </Col>
         <Col>
            <h2 className="username"><a href={url} target='_blank'>{username}</a></h2>
            <ListGroup>
               <ListGroup.Item>Repositorio: {repos}</ListGroup.Item>
               <ListGroup.Item>Seguidores: {followers}</ListGroup.Item>
               <ListGroup.Item>Seguindo: {following}</ListGroup.Item>
            </ListGroup>
         </Col>
         <Col></Col>
      </Row>
   </Jumbotron>
)

UserInfo.propTypes = {
   username: PropTypes.string.isRequired,
   imgUrl: PropTypes.string.isRequired,
   url: PropTypes.string.isRequired,
   repos: PropTypes.number.isRequired,
   followers: PropTypes.number.isRequired,
   following: PropTypes.number.isRequired
}


export default UserInfo;