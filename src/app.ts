import express from 'express'
import cors from 'cors'
import { setUpRoutes } from './routes'
import ErrorMiddleware from './middlewares/errorhandler.middleware'

const app = express()
app.use(cors({
    origin: true,
    credentials: true
}))

setUpRoutes(app)

app.use(ErrorMiddleware)

export default app