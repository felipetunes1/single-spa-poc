'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import { ListGroup } from "react-bootstrap";

const Repos = ({ className, title, repos }) => (
   <ListGroup>
         {repos.map(
            (repo, index) => <ListGroup.Item key={repo.id} action href={repo.link} target='_blank'>{repo.name}</ListGroup.Item>
         )}
         </ListGroup>

)

Repos.defaultProps = {
   className: ''
}

Repos.propType = {
   className: PropTypes.string,
   title: PropTypes.string.isRequired,
   repos: PropTypes.array

}

export default Repos;