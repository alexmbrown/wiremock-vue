'use strict'

const serverService = require('../services/server.service')
const wireMockService = require('../services/wire-mock.service')

async function index (ctx) {
  const server = serverService.getServer(ctx.params.serverId)
  ctx.status = 200
  ctx.body = await wireMockService.getMappings(server.address)
}

module.exports = {
  index
}