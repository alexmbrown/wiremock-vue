const fs = require('fs-extra')

const file = 'tmp/servers.json'

function readServersFile() {
  return fs.readJsonSync(file)
}

module.exports = {
  init: async () => {
    const exists = await fs.pathExists(file);
    if (!exists) {
      await fs.ensureFile(file)
      await fs.writeJson(file, [])
    }
  },
  getServer: id => readServersFile().find(s => s.id === id),
  getServers: () => readServersFile(),
  putServers: servers => fs.writeJson(file, servers)
}