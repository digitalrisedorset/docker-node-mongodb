import {setupMongo} from "./mongo.js";
import routes from "../../routes/index.js";

export const initialiseApp = async (app, config) => {
    setupMongo(config)
    routes(app)
}