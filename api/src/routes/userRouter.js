import express from "express";
import config from "../lib/config.js";
import { UserService } from "../services/user/UserService.js";

export const setupUserRoutes = (app) => {
    const userRouter = express.Router()

    userRouter.use('/', (req, res, next) => {
        console.log('1 - user router middleware function one')
        next()
    })

    userRouter.get('/:id', (req, res) => {
        const user = UserService.get(req.params.id)
        res.status(200).json(user)
    })

    userRouter.post('/', (req, res) => {
        UserService.create(req.body)
            .then(user => res.status(200).json(user))
            .catch(err => res.status(500).json({message: err.message}))
    })

    userRouter.use('/login', (req, res) => {
        console.log('1 - user logs in')
        res.status(200).json({
            message: '✓ User login: test success'
        })
    })

    app.use(config.route.userPrefix, userRouter)
}