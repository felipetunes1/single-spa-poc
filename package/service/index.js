const express = require('express')
const cors = require('cors')
const elements = require('./src/repository/elements.repository')
const routes = require('./src/repository/routes.repository')

const app = express()
app.use(cors())

app.get('/routes', (req, res) => {
   res.json(routes)
})

app.get('/elements', (req, res) => {
   res.json(elements)
})

app.listen(9001, () => console.log('http://localhost:9001'))
