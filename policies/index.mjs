import express from 'express'
import authMiddleware from '../auth/middleware'
import { ADMIN } from '../auth/roles'
import { filterBy } from './policies'

const router = express.Router()

router.get('/', authMiddleware(ADMIN), (req, res) => {
  const { username } = req.query

  const policies = filterBy(username)

  return res.json(policies)
})

export default router