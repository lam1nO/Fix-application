import {Router} from 'express'
import serviceRouter from './v1/services'

const v1Router = new Router()

v1Router.use('/api/v1', serviceRouter)

export default v1Router