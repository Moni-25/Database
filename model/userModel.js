const {default:mongoose} = require("mongoose")

const UserModel = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    phoneNo : {
        type: String,
        required: true
    },
    address : {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("user", UserModel);