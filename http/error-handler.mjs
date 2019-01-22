import ApplicationError from '../infra/application-error'

const errorHandler = (err, req, res, next) => {
  if (err instanceof ApplicationError)
    return res.status(400).json({ message: err.message })

  if (err.name === 'UnauthorizedError')
    return res.status(401).json({ message: 'Unauthorized' })

  return res.status(500).json({ message: err.message })
}

export default errorHandler
