'use strict';

const request = require('request-promise')

module.exports = {
  getMapping: (address, mappingId) => request(`${address}/__admin/mappings/${mappingId}`),
  getMappings: address => request(`${address}/__admin/mappings`)
}