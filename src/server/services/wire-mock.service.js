'use strict';

const request = require('request-promise')

module.exports = {
  getMappings: async address => {
    try {
      return await request(`${address}/__admin/mappings`)
    } catch (err) {
      return [];
    }

  }
}