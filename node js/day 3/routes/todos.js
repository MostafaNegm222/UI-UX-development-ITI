const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");
const User = require("../models/user");


router.get('/' ,async (req,res,next) => {
    try {
        let Todos = await Todo.find({},{__v:0})
        res.send(Todos)
    } catch (err) {
        next(err)
    }
})

router.get('/:id' ,async (req,res,next) => {
    try {
        let todo = await Todo.findById(req.params.id)
        res.send(todo)
    } catch (err) {
        next(err)
    }
})

router.post("/",async (req,res,next) => {
    let {title , description, complete ,userId } = req.body
    const todo = new Todo({title , description, complete});
    await todo.save();

    await User.findByIdAndUpdate(userId, {
        $push: { todos: todo._id }
    });
    res.send(todo)
})

module.exports = router;