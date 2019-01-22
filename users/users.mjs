import data from '../data/users.json'
import ApplicationError from '../infra/application-error'
import { getById as getPolicyById } from '../policies/policies'

const users = data.users

export const filterBy = (id, name, policy) => {
  if (!id && !name && !policy)
    throw new ApplicationError('Must provide either id, name or policy as a filter')

  return users
    .filter(u => !id || u.id === id)
    .filter(u => !name || u.name === name)
    .filter(u => {
      if (!policy)
        return true

      const { clientId } = getPolicyById(policy) || {}
      return u.id === clientId
    })
}