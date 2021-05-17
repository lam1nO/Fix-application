const mongoose = require('mongoose')
const {Schema} = mongoose

const CategorySchema = new Schema({
    name: String,
    slug: String,
    services: [{type: Schema.Types.ObjectId, ref: 'BaseService', required: true}]
})

export default mongoose.model('Category', CategorySchema)