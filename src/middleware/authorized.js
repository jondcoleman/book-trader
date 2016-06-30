'use strict'

const errors = require('feathers-errors')

module.exports = function(app) {
  return function(req, res, next) {
    //replace this with a look up user and check if authenticated
    console.log('test', req.cookies)
    let authorized = true
    if (authorized) {
      req.authorized = true
      next()
    } else {
      req.authorized = false
      next(new errors.NotAuthenticated('Not Authenticated'))
    }
  }

}
