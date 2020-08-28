'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Search from './search/search.component'
import UserInfo from './user-info/user-info.component'
import Actions from './actions/actions.component'
import Repos from './repos/repos.component'

import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

const AppContent = ({
   userinfo,
   repos,
   starred,
   handleSearch,
   handleRepos,
   handleStarred }) => (
      <Container>
         {<Search handleSearch={handleSearch} />}

         {!!userinfo &&
            <UserInfo
               username={userinfo.username}
               imgUrl={userinfo.imgUrl}
               url={userinfo.url}
               repos={userinfo.repos}
               followers={userinfo.followers}
               following={userinfo.following}
            />
         }

         {!!userinfo && <Actions handleRepos={handleRepos} handleStarred={handleStarred} />}

         <Row>
            <Col>
               {!!repos.length &&
                  <Repos
                     title='Repositorios'
                     className='repos'
                     repos={repos} />
               }
            </Col>
            <Col>

               {!!starred.length &&
                  <Repos
                     title='Favoritos'
                     className='starred'
                     repos={starred} />
               }
            </Col>
         </Row>

      </Container>

   )

AppContent.propTypes = {
   userinfo: PropTypes.shape({
      username: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      repos: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
      following: PropTypes.number.isRequired
   }),
   repos: PropTypes.array.isRequired,
   starred: PropTypes.array.isRequired
}

export default AppContent
