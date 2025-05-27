import express, { Application } from 'express'
import newsRoutes from './news.routes'
import userRoutes from './user.routes'

export const setUpRoutes = (app: Application) => {
    app.use(express.json())
    app.use("/api/v1/news", newsRoutes)
    app.use("/api/v1/users", userRoutes)
}