import dotenv from 'dotenv'
dotenv.config()

module.exports = {
    port: 8090,
    host: "localhost",
    dbURL: process.env.REMOTE_TEST,
    dbOptions: {useNewUrlParser: true, useUnifiedTopology: true}
}