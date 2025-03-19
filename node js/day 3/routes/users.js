   const express = require("express");
   const router = express.Router();
   const User = require("../models/user");
   
   
   router.get('/' ,async (req,res,next) => {
        try {
            let Users = await User.find({},{password:0 ,__v:0}).populate("todos","_id title complete")
            res.send(Users)
        } catch (err) {
            next(err)
        }
    })
    
    router.get('/:id' ,async (req,res,next) => {
        try {
            let user = await User.findById(req.params.id).populate("todos")
            res.send(user)
        } catch (err) {
            next(err)
        }
    })
    
    router.post("/",async (req,res,next) => {
        let {name , email , password} = req.body
        const user = new User({ name, email , password});
        await user.save();
        res.send(user)
    })

    module.exports = router;