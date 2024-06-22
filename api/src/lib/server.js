import express from 'express'
import config from "./config.js";
import { initialiseApp } from "./initilisers/index.js";

export const startServer = async () => {
    const app = express()
    const port = config.port

    app.use(express.json())

    await initialiseApp(app, config)

    try {
        app.listen(port, () => {
            console.log(`Server running on port ${port}`)
        })
    } catch (err) {
        throw new Error(err)
    }
}