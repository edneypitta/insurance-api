import assert from 'assert'
import { authenticate } from './auth'

describe('auth', () => {
  describe('authenticate', () => {
    it('returns undefined if user doesnt exist', () => {
      assert.equal(authenticate(), undefined)
    })

    it('returns user with token', () => {
      const user = authenticate('britneyblankenship@quotezart.com')

      assert.ok(user)
      assert.ok(user.token)
    })
  })
})