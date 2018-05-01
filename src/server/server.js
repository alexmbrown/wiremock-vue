'use strict'

const Koa = require('koa');
const Router = require('koa-router')
const morgan = require('koa-morgan')
const routes = require('./routes')
const bodyParser = require('koa-bodyparser');

module.exports = function startServer () {

  require('./services/server.service').init()

  const app = new Koa();
  app.use(bodyParser());
  const apiRouter = new Router({
    prefix: '/api'
  });

  app.use(morgan('combined'))

  apiRouter.get('/servers', routes.servers.index)
  apiRouter.post('/servers', routes.servers.create)
  apiRouter.get('/servers/:serverId/mappings', routes.mappings.index)
  apiRouter.get('/servers/:serverId/mappings/:mappingId', routes.mappings.get)

  app
    .use(apiRouter.routes())
    .use(apiRouter.allowedMethods());

  let port = process.env.PORT || 8080
  return app.listen(port, () => console.log(`WireMock Vue listening on  port ${port}`))
}