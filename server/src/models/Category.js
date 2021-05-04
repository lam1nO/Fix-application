const mongoose = require('mongoose')
const {Schema} = mongoose

const CategorySchema = new Schema({
    name: String,
    slug: String,
})

export default mongoose.model('Category', CategorySchema)