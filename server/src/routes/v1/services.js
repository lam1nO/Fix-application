import {Router} from 'express'
import {Service, BaseService, Category} from '@models/Service'
import serviceController  from '@controllers/v1/services.controller'

const serviceRouter = new Router()

// serviceRouter.post('/', serviceController.)

// SERVICES
serviceRouter.get('/services', serviceController.fetchServices)


// CATS
serviceRouter.post('/category', serviceController.createCategory)
serviceRouter.get('/categories', serviceController.getCategories)

export default serviceRouter