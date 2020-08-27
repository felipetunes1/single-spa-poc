'use strict'

import call from '../call.service'

const callbackService = callback => (
   result =>
      callback({
         userinfo: {
            username: result.name || result.login,
            repos: result.public_repos,
            followers: result.followers,
            following: result.following,
            imgUrl: result.avatar_url,
            url: result.html_url,
            repos_url: result.repos_url,
            starred_url: `https://api.github.com/users/${result.login}/starred`
         }
      })
)

const UserInfoService = (username, callback) => call(`https://api.github.com/users/${username}`, callbackService(callback))

export default UserInfoService;

