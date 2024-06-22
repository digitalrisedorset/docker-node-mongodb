import {setupUserRoutes} from "./userRouter.js";
import {setupApiRoutes} from "./apiRouter.js";
import {setupDefaultRoutes} from "./defaultRouter.js";

export default (app) => {
    setupDefaultRoutes(app)
    setupUserRoutes(app)
    setupApiRoutes(app)
}