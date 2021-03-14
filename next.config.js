// require('dotenv').config()

module.exports = {
    env: {
        API_ENDPOINT: process.env.API_ENDPOINT || "https//:localhost:3000/api/eggComp"
    },
    serverRuntimeConfig: {
        MONGO_URI: process.env.MONGO_URI,
    },
    generate: {
        dir: 'dist'
      }
}