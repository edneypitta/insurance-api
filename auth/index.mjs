import express from 'express'
import { authenticate } from './auth'

const router = express.Router()

router.post('/login', (req, res) => {
  const user = authenticate(req.body.email)

  if (user)
    return res.json(user)

  return res.status(401).json({ message: 'Invalid credentials' })
})

export default router