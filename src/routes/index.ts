import express, { Application } from 'express'
import exampleRoutes from './examples.router'

export const setUpRoutes = (app: Application) => {
    app.use(express.json())
    app.use(exampleRoutes)
}