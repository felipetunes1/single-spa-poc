const express = require('express')
// const expressSession = require()
const cors = require('cors')
const elements = require('./src/repository/elements.repository')
const routes = require('./src/repository/routes.repository')
const { auth, getUser } = require('./src/repository/user.config.respository')

const app = express()
app.use(cors())

app.get('/app', (req, res) => {
   res.json(routes.app)
})

app.get('/routes', (req, res) => {
   res.json(routes.mainMenu(getUser(req.query.user)))
})

app.get('/elements', (req, res) => {
   res.json(elements)
})

app.get('/auth', (req, res) => {
   res.json(auth(req.query.user, req.query.pass))
})

app.listen(9001, () => console.log('http://localhost:9001'))
