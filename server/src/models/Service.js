const mongoose = require('mongoose')
const {Schema} = mongoose

const ServiceSchema = new Schema({
    service: {type: Schema.Types.ObjectId, ref: 'BaseService'},
    price: Number,
    status: String,
    time: Date,
    popular: Boolean
})

export default mongoose.model('Service', ServiceSchema)