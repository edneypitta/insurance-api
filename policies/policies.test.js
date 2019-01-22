import assert from 'assert'
import { filterBy, getById } from './policies'

describe('policies', () => {
  describe('filterBy', () => {
    it('throws error if username is not provided', () => {
      assert.throws(filterBy)
    })

    it('returns empty array if username doesnt exist', () => {
      assert.deepEqual(filterBy('foo'), [])
    })

    it('returns policies by username', () => {
      const policies = filterBy('Britney')
      assert.equal(policies.length, 102)
    })
  })

  describe('getById', () => {
    it('returns undefined if policy doesnt exist', () => {
      assert.equal(getById(0), undefined)
    })

    it('gets policy by id', () => {
      const policy = getById('64cceef9-3a01-49ae-a23b-3761b604800b')
      assert.ok(policy)
    })
  })
})