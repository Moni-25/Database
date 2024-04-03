const UserController = require("express").Router();
const UserModel = require("../model/userModel");

UserController.get("/", (req, res) =>{
    //console.log(StudentModel);
    UserModel.find()
        .then((response) => {
            if(response.length > 0)
            {
                res.status(200).json({
                    message: "User Data Fetched Successfully",
                    data: response
                });
            }
            else{
                res.status(200).json({
                    message: "No User Found",
                    data: response
                });
            }
        })
        .catch((e) => {
            res.status(500).json({
                error: e,
            });
        });
})

UserController.post("/create", (req,res) => {
    //console.log(req.body);
    const User = new UserModel(req.body);
    User.save()
        .then((response) => {
            if(response._id){
                res.status(201).json({
                    success: true,
                    message: "User Created Successfully!!!"
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
                error: e,
            });
        });
})

module.exports = UserController;