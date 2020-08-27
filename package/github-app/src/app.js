'use strict'

import React from 'react'
import AppContent from './components/app.content'
import userInfoService from './service/user-info/user-info.service'
import reposService from './service/repos/repos.service'

class App extends React.Component {
  constructor(state) {
    super(state)

    this.state = {
      userinfo: undefined,
      repos: [],
      starred: [],
      username: undefined,
      password: undefined,
      message: undefined
    }
  }

  handleSearch(e) {
    const value = e.target.value
    const key = e.which || e.keyCode
    const ENTER_KEY_CODE = 13
    if (key === ENTER_KEY_CODE) {
      userInfoService(value, ({ userinfo }) => {
        this.setState({ userinfo, repos: [], starred: [] })
      });
    }
  }

  callbackRepos(type) {
    return result => this.setState({ [type]: result })
  }

  render() {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
      handleSearch={(e) => this.handleSearch(e)}
      handleRepos={() => reposService(this.state.userinfo.repos_url, this.callbackRepos('repos'))}
      handleStarred={() => reposService(this.state.userinfo.starred_url, this.callbackRepos('starred'))}
    />
  }
}

export default function Root(props) {
  return (
    <App />
  );
}
