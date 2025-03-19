// server.js
const express = require('express');
const quickSort = require('./quickSort');
const app = express();

app.use(express.json());
app.post('/sort', (req, res) => {
    try {
        const { array } = req.body;
        const sorted = quickSort(array);
        res.json({ sorted });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));