const {default:mongoose} = require("mongoose");

const StudentModel = mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },
    studentEmail: {
        type: String,
        required: true
    },
    phoneNo: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    mentorId: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "mentor"
    }]
});

module.exports = mongoose.model("students", StudentModel);