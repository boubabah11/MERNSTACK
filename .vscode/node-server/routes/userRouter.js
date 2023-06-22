const express = require("express");
const userRoutes = express.Router({})//options for router can be put in, like case sensetive
const userDataModel = require("../data-model/userDataModel");//it will give access to mongoose queries


userRoutes.post("/api/signinupuser",(req, res)=>{
    //read the user object sent in request body
    console.log("user ", req.body)
    let userToLogin = req.body; //json format
    
    userDataModel.findOne({userName:req.body.userName}).then((existingUser)=>{
        if(existingUser) {
            console.log("sigin in success ", existingUser);
            res.send(existingUser)
        } else { //user is not present go for user creation
    
            //use schema to create new user object
            let newUser = new userDataModel(userToLogin)//req.body
            
            newUser.save().then((newUser)=>{//will get _id once document is created
                console.log("successful signup ", newUser);
                res.send(newUser)
            }).catch((err1)=>{
                console.log("err signup", err1);
                res.send("error while sign up")
            })
        }
    }).catch((err)=>{
        console.log("err whiled login ", err);
        res.send("Error while Login - existing user")
    })
})

userRoutes.get("/api/getuser",(req, res)=>{
    userDataModel.find()
    .then((allusers)=>{
        res.send(allusers)
    })
    .catch(()=>{
        res.send("error while fetching users")
    })
})


module.exports = userRoutes;