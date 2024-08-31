const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: [true, "price must be provided"]
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.9
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
    },
    featured_image: {
        type: String,
    },
    description: {
        type: String,
    },
    id: {
        type: Number,
        unique: true
    }



})

module.exports = mongoose.model("Product", productSchema)