export default {
    port: process.env.PORT || 3000,

    /**
     * Routes config
     */
    route: {
       apiPrefix: '/api',
       userPrefix: '/user'
    },

    /**
     * Mongo
     */
    mongo: {
        protocol: process.env.MONGO_PROTOCOL,
        username: process.env.MONGO_DB_USERNAME,
        password: process.env.MONGO_PASSWORD,
        database: process.env.MONGO_DB_NAME,
        url: process.env.MONGO_URL
    }
}