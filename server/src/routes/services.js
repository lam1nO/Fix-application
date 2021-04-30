const express = require('express')
const router = express.Router()
const Service = require('../models/serviceModel')

router.post('/services/create', (req, res) => {
    const service = new Service({
        title: req.body.title,
        price: req.body.price
    })
    service.save((err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.send({
                success: true,
                message: `Service Post ID: ${data._id}`
            })
        }
    })
})

module.exports = router