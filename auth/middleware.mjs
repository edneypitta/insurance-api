import expressJwt from 'express-jwt'
import { SECRET } from './config'

const authMiddleware = role =>
  [
    expressJwt({ secret: SECRET }),
    (req, res, next) => {
      if (role && role !== req.user.role)
        return res.status(403).json({ message: 'Forbidden' })

      next()
    }
  ]

export default authMiddleware