import express from 'express'
import cors from 'cors'
import { setUpRoutes } from './routes'

const app = express()
app.use(cors({
    origin: true,
    credentials: true
}))

setUpRoutes(app)

export default app