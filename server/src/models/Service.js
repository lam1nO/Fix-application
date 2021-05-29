const mongoose = require('mongoose')
const {Schema} = mongoose

const ServiceSchema = new Schema({
    service: {type: Schema.Types.ObjectId, ref: 'BaseService', required: true},
    status: String,
    date: { type: Date }
})

export default mongoose.model('Service', ServiceSchema)