const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); 
let todos = [];

app.get('/todos', (req, res, next) => {
    res.json(todos);

    // trigger an error when no todos exist

    // if (todos.length === 0) {
    //     return next("This todos list is empty");
    // }
});

app.get('/todos/:id', (req, res, next) => {
    let index = parseInt(req.params.id); 
    let todo = todos.find(todo => todo.id === index); 

    if (!todo) {
        return next("ToDo item not found"); 
    }

    res.json(todo);
});

app.post('/todos', (req, res) => {
    const { text } = req.body;
    if (!text) return res.status(400).json({ message: "Task text is required" });

    const newTodo = { id: Date.now(), text };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.put('/todos/:id', (req, res, next) => {
    const { id } = req.params;
    const { text } = req.body;

    let todo = todos.find(t => t.id == id);
    if (!todo) return next("Task not found");

    todo.text = text || todo.text;
    res.json(todo);
});

app.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    todos = todos.filter(t => t.id != id);
    res.json({ message: "Task deleted successfully" });
});

app.use("*", (req, res, next) => {
    res.status(404).json({ status: false, message: "This endpoint is not found" });
});

app.use((err, req, res, next) => {
    res.status(400).json({ status: false, message: err });
});

app.listen(port, () => {
    console.log(`🚀 Server is running at http://localhost:${port}`);
});


// to run in day 2 write npm run todo