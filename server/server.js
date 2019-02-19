const express = require('express')
const next = require('next')
const { parse } = require('url')
// const { join } = require('path')
const path = require('path');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev:dev, dir: './src' })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/p/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { id: req.params.id }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true)
    // TODO: (martin) make a dynamic list of static files
    const rootStaticFiles = ['/robots.txt', '/sitemap.xml', '/favicon.ico']
    if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
      // const path = join(__dirname, 'static', parsedUrl.pathname)
      console.log('file here?', path.resolve("./server/static/robots.txt"));
      // app.serveStatic(req, res, path)
      app.serveStatic(req, res, path.resolve("./server/static/robots.txt"));
    } else {
      handle(req, res, parsedUrl)
    }
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})