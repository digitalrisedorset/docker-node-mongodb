import express from "express";

export const setupDefaultRoutes = (app) => {
    const defaultRouter = express.Router()

    defaultRouter.use('/', (req, res, next) => {
        console.log('1 - default router middleware function one')
        next()
    })

    app.use('/', defaultRouter)
}