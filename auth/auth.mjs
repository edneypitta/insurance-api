import jwt from 'jsonwebtoken'
import { SECRET } from './config'
import data from '../data/users.json'

const users = data.users

export const authenticate = email => {
  const user = users.find(u => u.email === email)

  if (!user)
    return

  const token = jwt.sign({ sub: user.id, role: user.role }, SECRET)
  return {
    ...user,
    token
  }
}
