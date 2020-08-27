'use strict'

import call from '../call.service'

const callbackService = callback => (
   result =>
      callback(
         result.map((repos) => (
            {
               link: repos.html_url,
               name: repos.name,
               id: repos.id
            }
         ))
      )
)

const ReposService = (url, callback) => call(url, callbackService(callback))

export default ReposService;

