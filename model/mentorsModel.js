const { default: mongoose} = require("mongoose");

const MentorSchema = mongoose.Schema({
    mentorName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    course: {
        type: String,
        required: true
    },
    studentId: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "student"
    }]
});

module.exports = mongoose.model("mentor", MentorSchema);