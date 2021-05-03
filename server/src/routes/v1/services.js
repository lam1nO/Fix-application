import {Router} from 'express'
const Service = require('@models/serviceModel')
import serviceController  from '@controllers/v1/services.controller'

const serviceRouter = new Router()

serviceRouter.post('/create', serviceController.create)

//const service = new Service({
//     title: req.body.title,
//     price: req.body.price
// })
// service.save((err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         res.send({
//             success: true,
//             message: `Service Post ID: ${data._id}`
//         })
//     }
// })

export default serviceRouter