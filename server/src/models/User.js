import {Schema} from 'mongoose'
import mongoose from 'mongoose'

const UserSchema = new Schema({
    phone: String,
    username: { type: String, required: true },
    email: String,
    password: String,
    type: {type: String},
    cart: [{ type: Schema.Types.ObjectId, ref: 'Service'}],
    last_name: String,
    first_name: String,
    patronymic: String
})

const User = new mongoose.model('User', UserSchema)

export default {
    User
}