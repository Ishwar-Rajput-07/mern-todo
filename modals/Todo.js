const mongoose = require("mongoose")

module.exports = mongoose.model("todo", mongoose.Schema({
    //👇👇 table cha Schema
    task: {
        type: String,
        required: true
    },
    desc: String,
    complete: Boolean,
    Priority: Number

}))