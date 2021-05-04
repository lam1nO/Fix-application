const mongoose = require('mongoose')
const {Schema} = mongoose

const BaseServiceSchema = new Schema({
    title: String,
    description: String,
    category: {type: Schema.Types.ObjectId, ref: 'Category'}
})

export default mongoose.model('BaseService', BaseServiceSchema)