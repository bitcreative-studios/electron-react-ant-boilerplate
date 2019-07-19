const path = require("path")
module.exports = {
  resolve: {
    modules: [path.resolve(__dirname,"..","src"), path.resolve(__dirname,"..","node_modules")],
    alias: {
      "@":path.resolve(__dirname,"..","src")
    },
  },
}
