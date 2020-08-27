const users = [
   {
      "name": "admin",
      "user": "admin",
      "pass": "12345",
      "config": {
         "menu": [4, 5, 6, 7, 8],
         "profile": 1
      }
   },
   {
      "name": "develop",
      "user": "develop",
      "pass": "54321",
      "config": {
         "menu": [4, 6],
         "profile": 2
      }

   },
   {
      "name": "user",
      "user": "user",
      "pass": "1111",
      "config": {
         "menu": [4],
         "profile": 3
      }

   }
]

function auth(userParam, passParam) {
   let response = users.find(({ user, pass }) => user === userParam && pass === passParam)

   return response ? { "username": response.name, "token": Date.now(), "user": response.user } : null

}

function getUser(userParam) {
   return users.find(({ user }) => user === userParam)
}

module.exports = { auth, getUser }