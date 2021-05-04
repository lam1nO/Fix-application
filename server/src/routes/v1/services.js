import {Router} from 'express'
import {Service, BaseService, Category} from '@models/Service'
import serviceController  from '@controllers/v1/services.controller'
import servicesController from '../../controllers/v1/services.controller'

const serviceRouter = new Router()

// serviceRouter.post('/', serviceController.)

// SERVICES
serviceRouter.get('/services', serviceController.fetchServices)

// BaseServices
serviceRouter.post('/base_service', servicesController.createBaseService)
serviceRouter.get('/base_service/:id', serviceController.getBaseService)
serviceRouter.get('/base_service', servicesController.fetchBaseService)


// CATS
serviceRouter.post('/category', serviceController.createCategory)
serviceRouter.get('/categories', serviceController.getCategories)

export default serviceRouter