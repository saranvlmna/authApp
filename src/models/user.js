const { Schema, model } = require('mongoose')
const schema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
    },
    password: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = model("User", schema)