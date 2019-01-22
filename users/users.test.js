import assert from 'assert'
import { filterBy } from './users'

describe('users', () => {
  describe('filterBy', () => {
    it('throws error if no parameter is provided', () => {
      assert.throws(filterBy)
    })

    it('returns users by id', () => {
      const policies = filterBy('a0ece5db-cd14-4f21-812f-966633e7be86')
      assert.equal(policies.length, 1)
    })

    it('returns users by name', () => {
      const policies = filterBy(null, 'Britney')
      assert.equal(policies.length, 1)
    })

    it('returns users by policy', () => {
      const policies = filterBy(null, null, '64cceef9-3a01-49ae-a23b-3761b604800b')
      assert.equal(policies.length, 1)
    })
  })
})