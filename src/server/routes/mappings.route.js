'use strict'

const serverService = require('../services/server.service')
const wireMockService = require('../services/wire-mock.service')
const HttpStatus = require('http-status-codes')

const CONNECTION_REFUSED = 'ECONNREFUSED';

async function get (ctx) {
  const server = serverService.getServer(ctx.params.serverId)
  let mapping
  try {
    mapping = await wireMockService.getMapping(server.address, ctx.params.mappingId)
    ctx.body = mapping
    ctx.status = HttpStatus.OK
  } catch (err) {
    console.error('Error getting mapping', err.message)
    ctx.status = HttpStatus.INTERNAL_SERVER_ERROR
  }
}

async function index (ctx) {
  const server = serverService.getServer(ctx.params.serverId)
  let mappings
  try {
    mappings = await wireMockService.getMappings(server.address)
    ctx.body = mappings
    ctx.status = HttpStatus.OK
  } catch (err) {
    console.error('Error getting mappings', err.message)
    if (err.cause && err.cause.code === CONNECTION_REFUSED) {
      ctx.status = HttpStatus.NOT_FOUND
    } else {
      ctx.status = HttpStatus.INTERNAL_SERVER_ERROR
    }
  }
}

module.exports = {
  get,
  index
}