import data from '../data/policies.json'
import { filterBy as filterUsersBy } from '../users/users'

const policies = data.policies

export const filterBy = username => {
  if (!username)
    throw 'Must provide a username'

  const users = filterUsersBy(null, username)
  if (!users || users.length === 0 || users.length > 1)
    return []

  return policies.filter(p => p.clientId === users[0].id)
}

export const getById = id =>
  policies.filter(p => p.id === id)[0]
