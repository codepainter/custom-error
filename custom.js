'use strict'

const log = require('debug')('error:custom')

module.exports = function CustomError ({ code = 400, message = 'This is a CustomError', error = {} } = {}) {
    log('CustomError:', { code, message, error })
    Error.captureStackTrace(this, this.constructor)
    this.name = this.constructor.name
    this.code = code
    this.message = message
    this.error = error
}

require('util').inherits(module.exports, Error)
