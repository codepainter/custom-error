'use strict'

module.exports = function CustomError ({ statusCode = 400, message = 'This is a CustomError', object = {} } = {}) {
  Error.captureStackTrace(this, this.constructor)
  this.name = this.constructor.name
  this.statusCode = statusCode
  this.message = message
  this.object = object
}

require('util').inherits(module.exports, Error)
