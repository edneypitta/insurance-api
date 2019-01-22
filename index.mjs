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

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server listening on port ${port}`))

