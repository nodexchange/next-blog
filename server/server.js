const express = require('express')
const next = require('next')
const api = require('./modules/get-item')
const GraphQL = require('./modules/graphql')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev:dev, dir: './src' })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  const graphql = new GraphQL(server)


  // server.use(express.static('static'))
  server.use('/static', express.static('static'));


  // Set up home page as a simple render of the page.
  server.get('/p/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { id: req.params.id }
    app.render(req, res, actualPage, queryParams)
  })

  // Serve the item webpage with next.js as the renderer
  server.get('/item', (req, res) => {
    const itemData = api.getItem()
    app.render(req, res, '/item', { itemData })
  })

  // When rendering client-side, we will request the same data from this route
  server.get('/_data/item', (req, res) => {
    const itemData = api.getItem()
    res.json(itemData)
  })

  server.get('/_data/test', (req, res) => {
    const showsData = api.getShows();
    res.json(showsData)
  })

  // Fall-back on other next.js assets.
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
