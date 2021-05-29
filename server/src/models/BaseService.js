const mongoose = require('mongoose')
const {Schema} = mongoose

const BaseServiceSchema = new Schema({
    title: String,
    description: { type: String, default: "" },
    price: Number,
    // popular: { type: Boolean, default: false},
    category: {type: Schema.Types.ObjectId, ref: 'Category', required: true}
})

export default mongoose.model('BaseService', BaseServiceSchema)