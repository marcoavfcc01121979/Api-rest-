const express = require('express')
const consign = require('consign')
const bodyParsen = require('body-parser')


module.exports = () => {
  const app = express()

  app.use(bodyParsen.urlencoded({extended: true}))
  app.use(bodyParsen.json())

  consign()
    .include('./src/controller')
    .into(app)

  return app;
}
