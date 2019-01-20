import express from 'express'
import authMiddleware from '../auth/middleware'
import { ADMIN } from '../auth/roles'
import { filterBy } from './users'

const router = express.Router()

router.get('/', authMiddleware(), (req, res) => {
  const { id, name, policy } = req.query

  if (policy && req.user.role !== ADMIN)
    return res.status(403).json({ message: 'Policy filter requires admin role' })

  const users = filterBy(id, name, policy)

  return res.json(users)
})

export default router