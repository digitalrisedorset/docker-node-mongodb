import express from 'express'
import config from "./config.js";

export const startServer = () => {
    const httpServer = express()
    const port = config.port

    httpServer.use((req, res, next) => {
        console.log('1 - first express middleware function')
        next()
    })

    httpServer.use('/api', (req, res, next) => {
        console.log('2 - second express middleware function')
        next()
    })

    // TODO - a router to take the routing role
    httpServer.get('/api/ping', (req, res) => {
        console.log(`T - Ping route: ${req.url} ${Date.now()}`)
        res.status(200).json({
            message: '✓ Pong: test success'
        })
    })

    httpServer.all('*', (req, res) => {
        console.log('4 - catch all')
        res.status(404).json({
            message: `${req.url} not found`
        })
    })

    try {
        httpServer.listen(port, () => {
            console.log(`Server running on port ${port}`)
        })
    } catch (err) {
        throw new Error(err)
    }
}