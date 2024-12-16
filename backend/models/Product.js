import { Schema, model } from 'mongoose'

const Product = new Schema({
    header: {
        type: String,
        required: true
    },
    price: {
        type: Number
    }
})

export default model('Product', Product)