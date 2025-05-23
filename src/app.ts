import express, { Router, Request, Response, NextFunction } from 'express'
import { setUpRoutes } from './routes'

const app = express()

setUpRoutes(app)

export default app