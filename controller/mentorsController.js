const MentorRouter = require("express").Router();
const MentorModel = require("../model/mentorsModel");
const StudentModel = require("../model/studentsModel");

MentorRouter.get("/", (req,res) =>{
    MentorModel.find()
    .populate({
        path: "studentId",
        model: StudentModel,
        select: {
          _id: 0,
          studentName: 1,
          studentEmail: 1,
          phoneNo: 1
        },
    })
    .select({
        studentId: 1,
        mentorName: 1,
        email: 1,
        course: 1,
    })
    .then((response) => 
    {   
        if(response.length > 0)
        {
            res.status(200).json({
                message: "Mentor Fetched Successfully",
                data: response
            });
        }
        else{
            res.status(200).json({
                message: "No Mentor Found",
                data: response
            });
        }
    })
    .catch((e) => 
        res.status(500).json({
        error: e,
    })
    );
})

MentorRouter.post("/create", (req,res) => {
    console.log(req.body);
    const Mentor = new MentorModel(req.body);
    Mentor.save()
        .then((response) => {
            if(response._id){
                res.status(201).json({
                    success: true,
                    message: "Mentor Created Successfully!!!"
                });
            }
            else{
                res.status(500).json({
                    error: "Something Wrong",
                });
            }
        })
        .catch((e) => {
            res.status(400).json({
            error: e
            });
        });
});


MentorRouter.patch("/assign_student", multipleStudentsAssign)

//stud_list.map((d,i) =>{ console.log(d._id)})
function multipleStudentsAssign (req,res) {
    const {mentor,stud_list} = req.body;
    console.log(mentor, stud_list)
    MentorModel.findByIdAndUpdate(
        mentor, {studentId: stud_list}
    )
        .then(function () {
            console.log("Data inserted") // Success 
        }).catch(function (error) {
            console.log(error)     // Failure 
        })
}

module.exports = MentorRouter;