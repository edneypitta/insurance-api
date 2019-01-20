import express from 'express'
import bodyParser from 'body-parser'
import userRoutes from './users'
import policyRoutes from './policies'
import authRoutes from './auth'
import errorHandler from './http/error-handler'

const app = express()

app.use(bodyParser.json())
app.use('/', authRoutes)
app.use('/users', userRoutes)
app.use('/policies', policyRoutes)
app.use(errorHandler)

app.listen(3000, () => console.log('Server listening on port 3000'))

