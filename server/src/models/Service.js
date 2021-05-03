const mongoose = require('mongoose')
const {Schema} = mongoose

const BaseServiceSchema = new Schema({
    title: String,
    description: String,
    category: {type: Schema.Types.ObjectId, ref: 'Category'}
})

const ServiceSchema = new Schema({
    service: {type: Schema.Types.ObjectId, ref: 'BaseService'},
    price: Number,
    status: String,
    time: Date,
})

const CategorySchema = new Schema({
    name: String,
    slug: String,
})

const BaseService = mongoose.model('BaseService', BaseServiceSchema)
const Service = mongoose.model('Service', ServiceSchema)
const Category = mongoose.model('Category', CategorySchema)

export default { 
    BaseService,
    Category,
    Service
}