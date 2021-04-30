const mongoose = require('mongoose')
const {Schema} = mongoose

const ServiceSchema = new Schema({
    title: String,
    price: Number,
})

const ServiceModel = mongoose.model('Services', ServiceSchema)

module.exports = ServiceModel