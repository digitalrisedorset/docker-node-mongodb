import express from "express";
import config from "../lib/config.js";

export const setupApiRoutes = (app) => {
    const apiRouter = express.Router()

    apiRouter.use('/', (req, res, next) => {
        console.log('1 - api router middleware function one')
        next()
    })

    apiRouter.get('/ping', (req, res) => {
        console.log(`Ping route: ${req.url}, date: ${(new Date).toLocaleString()}`)
        res.status(200).json({
            code: 'OK',
            message: '✓ Pong: test success'
        })
    })

    apiRouter.all('/ping', (req, res) => {
        const code = 500
        res.status(code).json({
            code: 'DENIED',
            message: `${req.method} is not allowed for ${req.url}`
        })
    })

    apiRouter.all('*', (req, res) => {
        console.log('4 - catch all')
        res.status(404).json({
            code: 'NOTFOUND',
            message: `${req.url} not found`
        })
    })

    app.use(config.route.apiPrefix, apiRouter)
}