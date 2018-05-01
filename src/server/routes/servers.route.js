'use strict'

const service = require('../services/server.service')
const uuidv4 = require('uuid/v4')

async function create (ctx) {
  let servers = await service.getServers()
  let server = ctx.request.body
  server.id = uuidv4()
  servers.push(server)
  await service.putServers(servers)
  ctx.body = server
}

async function index (ctx) {
  ctx.body = await service.getServers()
}

module.exports = {
  create,
  index
}