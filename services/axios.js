const axios = require('axios')

const instance = axios.create({ baseURL: 'www.miapp.app' })

module.exports = instance
