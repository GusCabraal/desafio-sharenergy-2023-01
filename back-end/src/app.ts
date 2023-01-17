import express from 'express'
import 'express-async-errors'
import { handleErrors } from './Middlewares/handleErrors'
import { clientManagerRoutes, httpCatRoutes, loginRoutes, randomDogRoutes, usersRoutes } from './Routes'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/login', loginRoutes)
app.use('/users', usersRoutes)
app.use('/randomDog', randomDogRoutes)
app.use('/httpCat', httpCatRoutes)
app.use('/clientManager', clientManagerRoutes)

app.use(handleErrors)

export default app
