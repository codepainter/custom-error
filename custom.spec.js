const { describe, it } = require('mocha')
const { expect } = require('chai')

const CustomError = require('./custom')

describe('CustomError', () => {
  it('should have these properties', () => {
    const error = new CustomError()
    expect(error).to.ownProperty('code')
    expect(error).to.ownProperty('message')
    expect(error).to.ownProperty('object')
  })

  describe('parameters', () => {
    it('should defaulted to 400, `This is a CustomError`, and {}', () => {
      const error = new CustomError()
      expect(error.code).to.eq(400)
      expect(error.message).to.eq('This is a CustomError')
      expect(error.object).to.deep.eq({})
    })

    it('should return given properties', () => {
      const error = new CustomError({
        code: 9876, //
        message: 'This is a test',
        object: { oh: 'my god' }
      })
      expect(error.code).to.eq(9876)
      expect(error.message).to.eq('This is a test')
      expect(error.object).to.deep.eq({ oh: 'my god' })
    })
  })
})
