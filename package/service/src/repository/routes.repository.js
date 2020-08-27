const app = [
   {
      "endpoint": "//localhost:9301/hdi-seguros-header-app.js",
      "app": "@hdi-seguros/header-app",
   },
   {
      "endpoint": "//localhost:9302/hdi-seguros-nav-menu.js",
      "app": "@hdi-seguros/nav-menu",
   },
   {
      "endpoint": "//localhost:9306/hdi-seguros-footer-app.js",
      "app": "@hdi-seguros/footer-app",
   },
   {
      "endpoint": "//localhost:9303/hdi-seguros-home-app.js",
      "app": "@hdi-seguros/home-app",
   },
   {
      "endpoint": "//localhost:9305/hdi-seguros-games-app.js",
      "app": "@hdi-seguros/games-app",
   },
   {
      "endpoint": "//localhost:9307/hdi-seguros-github-app.js",
      "app": "@hdi-seguros/github-app",
   },
   {
      "endpoint": "//localhost:4300/main.js",
      "app": "angular-app",
   },
   {
      "endpoint": "//localhost:4200/main.js",
      "app": "music-app",
   },
   {
      "endpoint": "//localhost:9308/hdi-seguros-login-app.js",
      "app": "@hdi-seguros/login-app",
   }
]

const routes = [
   {
      "id": 1,
      "elementId": 1,
      "app": "@hdi-seguros/header-app",
      "route": "",
      "routeExcept": ["/login"],
      "default": false
   },
   {
      "id": 2,
      "elementId": 2,
      "app": "@hdi-seguros/nav-menu",
      "route": "",
      "routeExcept": ["/login"],
      "default": false
   },
   {
      "id": 3,
      "elementId": 4,
      "app": "@hdi-seguros/footer-app",
      "route": "",
      "routeExcept": ["/login"],
      "default": false
   },
   {
      "id": 4,
      "elementId": 3,
      "app": "@hdi-seguros/home-app",
      "route": "/",
      "routeExcept": null,
      "default": false,
      "menu": true
   },
   {
      "id": 5,
      "elementId": 3,
      "app": "@hdi-seguros/games-app",
      "route": "/games",
      "routeExcept": null,
      "default": false,
      "name": "Games",
      "menu": true,
      "order": 2
   },
   {
      "id": 6,
      "elementId": 3,
      "app": "@hdi-seguros/github-app",
      "route": "/github",
      "routeExcept": null,
      "default": false,
      "name": "GitHub",
      "menu": true,
      "order": 1
   },
   {
      "id": 7,
      "elementId": 3,
      "app": "angular-app",
      "route": "/angular",
      "routeExcept": null,
      "default": false,
      "name": "Angular APP",
      "menu": true,
      "order": 3
   },
   {
      "id": 8,
      "elementId": 3,
      "app": "music-app",
      "route": "/music",
      "routeExcept": null,
      "default": false,
      "name": "Music",
      "menu": true,
      "order": 3
   },
   {
      "id": 9,
      "elementId": 3,
      "app": "@hdi-seguros/login-app",
      "route": "/login",
      "routeExcept": null,
      "default": false,
      "name": "Login",
      "menu": false,
      "order": 3
   }
]

function mainMenu(user) {
   console.log(user)
   return routes.filter(({ route, id }) => {
      return !route || (!(user) ? id === 9 : user.config.menu.indexOf(id) >= 0)
   })

}

module.exports = { mainMenu, app }